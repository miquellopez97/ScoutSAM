import React, { useState, useEffect } from 'react';
import CircleInfo from '../circleInfo/CircleInfo';

const PlayerStats = ({ player, tip1, tip2, tip3 }) => {

  const [imageUrl, setImageUrl] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const avg1 = (player.sumShotsOfOneSuccessful / player.sumShotsOfOneAttempted * 100).toFixed();
  const avg2 = (player.sumShotsOfTwoSuccessful / player.sumShotsOfTwoAttempted * 100).toFixed();
  const avg3 = (player.sumShotsOfThreeSuccessful / player.sumShotsOfThreeAttempted * 100).toFixed();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://esb.optimalwayconsulting.com/fcbq/1/jR4rgA5K6Chhh5vyfrxo9wTScdg2NT7K/Federateds/getPhotobyUuidFederat/${player.uuid}`);
        const base64Response = await response.text();
        setImageUrl(base64Response);
      } catch (error) {
        console.error("Error al obtener la respuesta:", error);
      }
    };
  
    fetchData();
  
  }, [player.uuid]);

  
  useEffect(() => {
    // Decodificar la cadena Base64 a datos binarios
    const binaryData = atob(imageUrl);
  
    // Crear un Uint8Array a partir de los datos binarios
    const uint8Array = new Uint8Array([...binaryData].map(char => char.charCodeAt(0)));
  
    // Crear un Blob a partir del Uint8Array
    const blob = new Blob([uint8Array]);
  
    // Crear una URL de objeto a partir del Blob
    const imageUrlFromBlob = URL.createObjectURL(blob);
  
    // Hacer una solicitud fetch a la URL de la imagen para obtener la respuesta JSON
    fetch(imageUrlFromBlob)
      .then(response => response.json())
      .then(data => {
        // Extraer el valor de photoUrl de la respuesta JSON
        const photoUrl = data.messageData[0].photoUrl;
        setImageSrc(photoUrl);
      })
      .catch(error => {
        console.error("Error al obtener la respuesta JSON:", error);
      });
  
    // Limpiar la URL cuando el componente se desmonte
    return () => URL.revokeObjectURL(imageUrlFromBlob);
  }, [imageUrl]);

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

  console.log(imageSrc);

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
              {(imageSrc ? <img src={imageSrc} alt={player.name} style={imageStyle} /> : <img src='https://cdn-icons-png.flaticon.com/512/3097/3097257.png' alt={player.name} style={imageStyle} />)}
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
