import React from 'react';
import CircleInfo from '../circleInfo/CircleInfo';

const GeneralShoots = ({ team }) => {

  const avg1 = (team.sumShotsOfOneSuccessful / team.sumShotsOfOneAttempted * 100).toFixed();
  const avg2 = (team.sumShotsOfTwoSuccessful / team.sumShotsOfTwoAttempted * 100).toFixed();
  const avg3 = (team.sumShotsOfThreeSuccessful / team.sumShotsOfThreeAttempted * 100).toFixed();


  return (
    <div className="container-fluid" style={{width:"80em"}}>
      <div className="row">
        <div className="col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <div className="d-flex justify-content-around mb-0">
                <CircleInfo avg={avg1} number1={team.sumShotsOfOneSuccessful} number2={team.sumShotsOfOneAttempted} text="TL" />
                <CircleInfo avg={avg2} number1={team.sumShotsOfTwoSuccessful} number2={team.sumShotsOfTwoAttempted} text="T2" />
                <CircleInfo avg={avg3} number1={team.sumShotsOfThreeSuccessful} number2={team.sumShotsOfThreeAttempted} text="T3" />
              </div>
              {/* Agrega aquí el resto de la información que quieras mostrar */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralShoots;
