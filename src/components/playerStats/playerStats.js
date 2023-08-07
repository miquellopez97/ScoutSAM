import React from 'react';

const PlayerStats = ({ player }) => {

  const ppp = player.totalScoreAvgByMatch;
  const tci3 = player.sumShotsOfThreeAttempted;
  const tci2 = player.sumShotsOfTwoAttempted;
  const tci1 = player.sumShotsOfOneAttempted;
  const tca3 = player.sumShotsOfThreeSuccessful;
  const tca2 = player.sumShotsOfTwoSuccessful;
  const tca1 = player.sumShotsOfOneSuccessful;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Puntos por partido: {ppp.toFixed(2)}</p>
      <p>T3 {tca3} / {tci3}</p>
      <p>T2 {tca2} / {tci2}</p>
      <p>T1 {tca1} / {tci1}</p>
      {/* Agrega aquí el resto de la información que quieras mostrar */}
    </div>
  );
};

export default PlayerStats;
