import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const localAuth = localStorage.getItem('isAuthenticated');
    return localAuth === 'true'; // Verifica se o usuário está autenticado com base no localStorage (login)
  });

  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem('user');
    return localUser ? JSON.parse(localUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('user', JSON.stringify(user));
  }, [isAuthenticated, user]);

  const login = (username, password) => {
    // Simulação de autenticação
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setUser({ username: 'admin', role: 'admin' }); // Usuario mocado.
      return true;
    }
    setIsAuthenticated(false);
    setUser(null);
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};