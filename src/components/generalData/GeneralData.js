import React from "react";

const GeneralData = ({team, whiteBackground}) => {

  const avgFontSize = {
    fontSize: '1.4em', // Tamaño de fuente específico para este p
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "35em",
        textAlign: "center",
        margin:'1.2em 0em'
      }}
    >
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
      <p style={{ ...whiteBackground, ...avgFontSize, margin:"0.5em", maxWidth:"11em" }}>
        {team.name}
        <br />
        AVERAGE - {team.avg ? `(${team.avg})` : `(0)`}
      </p>
    </div>
  );
};

export default GeneralData;
