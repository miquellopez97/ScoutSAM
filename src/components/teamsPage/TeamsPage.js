import React from 'react';
import Team from '../team/Team';
import teamsData from '../../data/TeamsData';

const TeamsPage = () => {
  return (
    <div style={{width: "60%", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      <h1 style={{textAlign: "center", width: "100%", color: "white"}}>Copa Catalunya Masculina - FASE PRÈVIA- 02</h1>
      {teamsData.map((team) => (
        <div key={team.id} className="col-md-auto" style={{backgroundColor: "white", margin: "1em", borderRadius: "20%"}}>
          <Team
            teamName={team.name}
            teamLogo={team.teamPhoto}
            statsLink={team.teamStats}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamsPage;
