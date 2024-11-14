// UserInfo.tsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserInfo: React.FC = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserInfo deve ser usado dentro de um UserProvider");
  }

  const { user } = context;

  if (!user) return <p>Carregando informações do usuário...</p>;

  return (
    <div>
      <h2>Bem-vindo, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Telefone: {user.phone}</p>
    </div>
  );
};

export default UserInfo;
