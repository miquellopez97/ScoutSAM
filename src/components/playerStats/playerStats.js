import React from 'react';
import CircleInfo from '../circleInfo/CircleInfo';

const PlayerStats = ({ player, playerImage, tip1, tip2, tip3 }) => {

  const avg1 = (player.sumShotsOfOneSuccessful / player.sumShotsOfOneAttempted * 100).toFixed();
  const avg2 = (player.sumShotsOfTwoSuccessful / player.sumShotsOfTwoAttempted * 100).toFixed();
  const avg3 = (player.sumShotsOfThreeSuccessful / player.sumShotsOfThreeAttempted * 100).toFixed();

  const imageStyle = {
    width: '7em',
    height: '7em',
    objectFit: 'cover',
    position: 'absolute',
    borderRadius: '50%',
    top: 170,
    right: 30,
  };

  const playerCard = {
    width: '70em',
    height: '18em',
    margin: 'auto'
  };

  const playerName = player.name.length > 30 ? `${player.name.slice(0, 30)}...` : player.name;

  return (
    <div style={ playerCard }>
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">{playerName} #{player.dorsal} - {player.totalScoreAvgByMatch.toFixed(1)} P/G</h5>
              <div className="d-flex justify-content-around mb-3">
                <CircleInfo avg={avg1} number1={player.sumShotsOfOneSuccessful} number2={player.sumShotsOfOneAttempted} text="TL" />
                <CircleInfo avg={avg2} number1={player.sumShotsOfTwoSuccessful} number2={player.sumShotsOfTwoAttempted} text="T2" />
                <CircleInfo avg={avg3} number1={player.sumShotsOfThreeSuccessful} number2={player.sumShotsOfThreeAttempted} text="T3" />
              </div>
              <img src={playerImage} alt={player.name} style={imageStyle} />
              <div>
                {tip1 ? <p>- {tip1}</p> : <p>-Work in progress</p>}
                {tip2 ? <p>- {tip2}</p> : <p>-Work in progress</p>}
                {tip3 ? <p>- {tip3}</p> : <p>-Work in progress</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
