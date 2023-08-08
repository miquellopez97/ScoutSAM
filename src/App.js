import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamsPage from './components/teamsPage/TeamsPage';
import TeamStats from './components/teamStats/TeamStats';
import Login from './components/login/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticación aquí, por ejemplo, comprobar credenciales
    // Si la autenticación es exitosa, establecer isAuthenticated en true
    setIsAuthenticated(true);
  };

  // const handleLogout = () => {
  //   // Lógica de cierre de sesión aquí, por ejemplo, borrar tokens de acceso
  //   // Establecer isAuthenticated en false para redirigir a la página de inicio de sesión
  //   setIsAuthenticated(false);
  // };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <TeamsPage /> : <Login onLogin={handleLogin} />}
        />
        {/* La siguiente ruta usa un parámetro dinámico para capturar el nombre del equipo */}
        <Route
          path="/teamstats/:teamName"
          element={isAuthenticated ? <TeamStats /> : <Login onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
