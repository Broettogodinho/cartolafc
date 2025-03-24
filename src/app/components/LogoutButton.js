import React from 'react';
import { logoutUser } from '../auth/auth';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      alert('Logout realizado com sucesso!');
    } catch (err) {
      alert('Erro ao fazer logout: ' + err.message);
    }
  };

  return <button onClick={handleLogout}>Sair</button>;
};

export default LogoutButton;
