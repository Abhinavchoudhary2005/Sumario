"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  isPro: boolean;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string) => {
    // Demo sign in - in real app, connect to your auth provider here
    setUser({
      id: "1",
      email,
      isPro: false, // Randomly assign Pro status
    });
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
