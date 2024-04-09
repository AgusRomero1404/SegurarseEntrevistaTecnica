import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Perfil de Usuario</Link>
    
    </nav>
  </div>
  );
};

export default Menu;
