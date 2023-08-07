import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({ teamLogo, teamName, statsLink }) => {
  return (
    <div>
      <Link
        to={`/teamstats/${teamName.replace(/\s|\./g, '')}`}
        statsLink={statsLink}
        className="team card p-3"
        style={{
          height: '100%',
          width: '15em',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={teamLogo}
          alt={teamName}
          className="rounded-circle mx-auto d-block"
          style={{ width: '100px', height: '100px' }}
        />
        <h3 style={{ textAlign: 'center' }}>{teamName}</h3>
      </Link>
    </div>
  );
};

export default Team;