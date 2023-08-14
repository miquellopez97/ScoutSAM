import React from "react";

const GeneralData = ({team, whiteBackground}) => {

  const avgFontSize = {
    fontSize: '1.4em', // Tamaño de fuente específico para este p
  };

  const positionSize = {
    backgroundColor: 'white',
    padding: '0.75em',
    borderRadius: '0.5em',
    fontSize: '1em',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
  };

  const position = 0;
  const paf = 0;
  const pec = 0;
  const wins = 0;
  const loses = 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "40em",
        textAlign: "center",
        margin: "0.5em 0em",
      }}
    >
      <div style={positionSize}>
        <p>Punts anotats xp: {paf}</p>
        <p>Punts rebuts xp: {pec}</p>
        <p>Posició - {position} ({wins} / {loses})</p>
      </div>
      <img
        src={team.teamPhoto}
        alt={team.name}
        style={{
          width: "9em",
          height: "9em",
          display: "block",
          margin: "0 auto",
          borderRadius: "10%",
          marginRight: "1em",
        }}
      />
      <p style={{ ...whiteBackground, ...avgFontSize }}>
        {team.name}
        <br />
        AVERAGE - {team.avg ? `(${team.avg})` : `(0)`}
      </p>
    </div>
  );
};

export default GeneralData;
