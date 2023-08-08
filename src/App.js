import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TeamsPage from './components/teamsPage/TeamsPage';
import TeamStats from './components/teamStats/TeamStats';
import Login from './components/login/Login';

const App = () => {
  // Obtener el estado inicial de isAuthenticated desde localStorage si está disponible
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleLogin = () => {
    // Lógica de autenticación aquí, por ejemplo, comprobar credenciales
    // Si la autenticación es exitosa, establecer isAuthenticated en true
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Lógica de cierre de sesión aquí, por ejemplo, borrar tokens de acceso
    // Establecer isAuthenticated en false y eliminar la clave 'isAuthenticated' de localStorage
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  // Guardar el estado de isAuthenticated en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/teams" /> : <Login onLogin={handleLogin} />} />

        {/* Ruta protegida */}
        <Route path="/teams" element={isAuthenticated ? <TeamsPage /> : <Navigate to="/" />} />

        {/* La siguiente ruta usa un parámetro dinámico para capturar el nombre del equipo */}
        <Route path="/teamstats/:teamName" element={isAuthenticated ? <TeamStats /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
