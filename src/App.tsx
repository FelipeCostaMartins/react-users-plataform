// App.tsx
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import UserInfo from './UserInfo';
import { loginUser } from './api';

const App: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("App deve ser usado dentro de um UserProvider");
  }

  const { user, setUser } = context;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = await loginUser(email, password);
    if (user) {
      setUser(user);
      setError(null); // Limpa o erro se o login for bem-sucedido
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleLogout = () => {
    setUser(null); // Logout ao redefinir o usuário para `null`
  };

  return (
    <div>
      <h1>Aplicação de Perfil do Usuário</h1>
      {user ? (
        <>
          <UserInfo />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Senha:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default App;
