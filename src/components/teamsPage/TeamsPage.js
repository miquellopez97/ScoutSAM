import React from 'react';
import Team from '../team/Team';
import teamsData from '../../data/TeamsData';
import './TeamsPage.css'; // Agrega el archivo de estilos externo si es necesario

const TeamsPage = () => {
  return (
    <div className="teams-page-container">
      <h1 className="page-title">
        Copa Catalunya Masculina - FASE PRÈVIA- 02
      </h1>
      <div className="teams-container">
        {teamsData.map((team) => (
          <div key={team.id} className="team-container">
            <Team teamName={team.name} teamLogo={team.teamPhoto} statsLink={team.teamStats} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
