import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(!!sessionStorage.getItem('token'));
  const [userRole, setUserRole] = useState(Cookies.get('userRole') || '');

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      setAuthenticated(false);
      setUserRole('');
    } else {
      const role = sessionStorage.getItem('loggedUserRole');
      if (role) {
        setUserRole(role);
        Cookies.set('userRole', role);
      }
    }
  }, []);

  const setUserRoleAndAuth = (role) => {
    setUserRole(role);
    Cookies.set('userRole', role);
    setAuthenticated(true);
  };

  const logout = () => {
    setUserRole('');
    Cookies.remove('userRole');
    setAuthenticated(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('loggedUserRole');
    sessionStorage.removeItem('loggedUserName');
    sessionStorage.removeItem('loggedUserUsername');
    sessionStorage.removeItem('companyId')
    sessionStorage.removeItem('companyName')

    localStorage.removeItem('token');
    localStorage.removeItem('adminId')
    localStorage.removeItem('companyId')

  };

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, userRole, setUserRoleAndAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
