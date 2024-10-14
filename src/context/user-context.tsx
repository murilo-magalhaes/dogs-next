'use client';

import React from 'react';

type User = {
  id: number;
  email: string;
  nome: string;
  username: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error('useContext deve estar dento do Provider');
  }
  return context;
};

/**
 * O Provider serve para especificar os parâmetros que serão
 * urilizados no no Context, e páginas que serão englobadas
 */
export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = React.useState<User | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
