import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({ teamLogo, teamName, statsLink }) => {
  return (
    <div
      className="team card p-3"
      style={{
        height: '100%',
        width: '15em',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '12em', // Establecer una altura máxima para evitar el desbordamiento
        overflow: 'hidden', // Ocultar el contenido que exceda la altura máxima
      }}
    >
      <Link
        to={`/teamstats/${teamName.replace(/\s|\./g, '')}`}
        statsLink={statsLink}
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={teamLogo}
          alt={teamName}
          className="rounded-circle mx-auto d-block"
          style={{ width: '100px', height: '100px', marginBottom: '1em' }} // Ajustar el tamaño del logo
        />
        <h5 style={{ textAlign: 'center', margin: '0' }}>{teamName}</h5>
      </Link>
    </div>
  );
};

export default Team;
