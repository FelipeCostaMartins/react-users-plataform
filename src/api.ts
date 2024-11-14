// api.ts
interface User {
    name: string;
    email: string;
    phone: string;
  }
  
  const fakeUser: User = {
    name: "Felipe Costa Martins",
    email: "felipe@example.com",
    phone: "(12) 3456-7890",
  };
  
  // Função simulada de login que "consulta" um banco de dados fictício
  export const loginUser = async (email: string, password: string): Promise<User | null> => {
    // Aqui você pode adicionar regras de validação simples
    if (email === "felipe@example.com" && password === "123456") {
      return fakeUser;
    } else {
      return null;
    }
  };
  