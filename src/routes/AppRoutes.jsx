import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';
import LoginForm from './components/LoginFormNK';
import Employee from './components/EmployeeSB';
import UserForm from './components/UserFormSB';
import Dashboard from './components/Dashboard';

const AppRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/userform" element={<UserForm />} />
      <Route
        path="/employee"
        element={authenticated ? <Employee /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard"
        element={authenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRoutes;
