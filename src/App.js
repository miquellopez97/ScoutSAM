import './App.css';
import TeamsPage from './components/teamsPage/TeamsPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamStats from './components/teamStats/TeamStats';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamsPage />} />
        {/* La siguiente ruta usa un parámetro dinámico para capturar el nombre del equipo */}
        <Route path="/teamstats/:teamName" element={<TeamStats />} />
      </Routes>
    </Router>
  );
};

export default App;
