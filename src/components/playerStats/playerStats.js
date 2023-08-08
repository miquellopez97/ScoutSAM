import React from 'react';
import CircleInfo from '../circleInfo/CircleInfo';

const PlayerStats = ({ player }) => {

  const avg1 = (player.sumShotsOfOneSuccessful / player.sumShotsOfOneAttempted * 100).toFixed();
  const avg2 = (player.sumShotsOfTwoSuccessful / player.sumShotsOfTwoAttempted * 100).toFixed();
  const avg3 = (player.sumShotsOfThreeSuccessful / player.sumShotsOfThreeAttempted * 100).toFixed();

  return (
    <div className="container-fluid" style={{width:"70em"}}>
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title">{player.name} #{player.dorsal}</h4>
              <h5 className="card-text">Puntos por partido: {player.totalScoreAvgByMatch.toFixed(1)}</h5>
              <div className="d-flex justify-content-around mb-3">
                <CircleInfo avg={avg1} number1={player.sumShotsOfOneSuccessful} number2={player.sumShotsOfOneAttempted} text="TL" />
                <CircleInfo avg={avg2} number1={player.sumShotsOfTwoSuccessful} number2={player.sumShotsOfTwoAttempted} text="T2" />
                <CircleInfo avg={avg3} number1={player.sumShotsOfThreeSuccessful} number2={player.sumShotsOfThreeAttempted} text="T3" />
              </div>
              {/* Agrega aquí el resto de la información que quieras mostrar */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
