import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import teamsData from '../../data/TeamsData';
import PlayerStats from '../playerStats/playerStats';

const TeamStats = () => {
  const { teamName } = useParams();
  const team = teamsData.find((team) => team.name.replace(/\s|\./g, '') === teamName);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

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
    <div>
      <Link to="/">
        <img
          src="/home.svg"
          alt="Home"
          style={{ width: '3em', height: '3em', backgroundColor:"white", borderRadius:"30%", margin:"1em" }}
        />
      </Link>
      <h1 style={{color:"white"}}>Estadísticas de {team.name}</h1>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div>
          <h3>Mejores 3 jugadores</h3>
          {firstThreePlayers?.map((player) => (
            <PlayerStats key={player.uuid} player={player} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamStats;
