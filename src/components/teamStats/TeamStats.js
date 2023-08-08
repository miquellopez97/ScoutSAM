import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import teamsData from '../../data/TeamsData';
import PlayerStats from '../playerStats/playerStats';
import { Row, Col } from 'react-bootstrap';
import GeneralShoots from '../generalShoots/GeneralShoots';
import { desaturateColor } from '../../helper/colors';

const TeamStats = () => {
  const { teamName } = useParams();
  const team = teamsData.find((team) => team.name.replace(/\s|\./g, '') === teamName);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const desaturatedColor1 = desaturateColor(team.color1, 30);
  const desaturatedColor2 = desaturateColor(team.color2, 30);

  const backgroundColor = {
    backgroundImage: `linear-gradient(${desaturatedColor1}, ${desaturatedColor2})`,
    height: '100vh', // Asegurar que el componente ocupe toda la altura de la pantalla
    display: 'flex',
    flexDirection: 'column',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la solicitud GET a la URL de statsLink en el equipo encontrado
        const response = await axios.get(team.teamStats);

        // Establecer los datos obtenidos en el estado del componente
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      }
    };

    if (team) {
      fetchData(); // Llamar a la función para obtener los datos al cargar el componente
    }
  }, [team]);

  if (!team) {
    return <div>Equipo no encontrado</div>;
  }

  const firstThreePlayers = data.players?.slice(0, 3);

  return (
    <div style={backgroundColor}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <img
            src="/home.svg"
            alt="Home"
            style={{ width: '3em', height: '3em', backgroundColor:"white", borderRadius:"30%", margin:"1em" }}
          />
        </Link>
        <img
          src={team.teamPhoto}
          alt={team.name}
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div className="containerStats"  style={{ margin: '20px' }}>
          <Row>
            <Col className="firtsColumn col-4">
              <h3>Tirs generals:</h3>
              <GeneralShoots team={data.team}/>
            </Col>
            <Col className="secondColumn col-4">
              <h3>Jugadors Clau</h3>
              {firstThreePlayers?.map((player) => (
                <PlayerStats key={player.uuid} player={player} />
              ))}
            </Col>
            <Col className="thirdColumn col-4">
              <h3>Resta de jugadors</h3>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default TeamStats;
