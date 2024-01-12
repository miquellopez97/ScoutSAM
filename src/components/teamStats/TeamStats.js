import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import teamsData from '../../data/TeamsData';
import PlayerStats from '../playerStats/playerStats';
import { Row, Col } from 'react-bootstrap';
import GeneralShoots from '../generalShoots/GeneralShoots';
import { desaturateColor } from '../../helper/colors';
import GeneralData from '../generalData/GeneralData';

const TeamStats = () => {
  const { teamName } = useParams();
  const team = teamsData.find((team) => team.name.replace(/\s|\./g, '') === teamName);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const playersData = data.players || [];

  const desaturatedColor1 = desaturateColor(team.color1, 30);
  const desaturatedColor2 = desaturateColor(team.color2, 30);

  const backgroundColor = {
    backgroundImage: `linear-gradient(${desaturatedColor1}, ${desaturatedColor2})`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://msstats.optimalwayconsulting.com/v1/fcbq/team-stats/team/'+ team.id +'/season/2023';
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      }
    };

    if (team) {
      fetchData();
    }
  }, [team]);

  if (!team) {
    return <div>Equipo no encontrado</div>;
  }

  const filteredData = playersData.filter(jugador => !team.deletePlayers.includes(jugador.dorsal));

  const firstThreePlayers = filteredData?.slice(0, 3);
  let secondaryPlayers = team.secondary ? data.players?.filter(player => team.secondary.includes(player.dorsal)) || [] : [];
  //Retocar a 3
  secondaryPlayers = secondaryPlayers.slice(0, 4);

  const titleStyle = {
    margin: '0.5em 0 0.2em',
    backgroundColor: 'white',
    display: 'inline-block',
    padding: '0.2em 0.8em',
    borderRadius: '0.5em',
  };

  const whiteBackground = {
    backgroundColor: 'white',
    padding: '1em',
    borderRadius: '0.5em',
    fontSize: '1em',
    fontWeight: 'bold',
  };

  //Add Claus del partit
  const gameTips = team.tips?.map(tip => tip.toLocaleUpperCase()) || [];

  //Add Punts a tenir en compte
  const defPointsConsider = team.pointsConsider?.def?.map(tip => tip) || [];

  const atcPointsConsider = team.pointsConsider?.atc?.map(tip => tip) || [];

  //Add videos
  const videos = team.videos?.map(video => video) || [];

  return (
    <div style={backgroundColor}>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div className="containerStats" style={{ margin: '20px' }}>
          <Row>
            <Col className="firtsColumn col-4">
              <div style={{margin:"0em 0em"}}>
                <Link to="/">
                  <img
                    src="/home.svg"
                    alt="Home"
                    style={{ width: '3em', height: '3em', backgroundColor:"white", borderRadius:"30%", margin:"0em" }}
                  />
                </Link>
              </div>
              <div style={{margin:'-1em 0em'}}>
                <h3 style={titleStyle}>Dades generals:</h3>
                <div style={{ display: 'flex' }}>
                  <div className='generalShoots'>
                    <GeneralShoots team={data.team} />
                  </div>
                  <div style={{ margin:"0em -23em" }} >
                    {/* Este div vacío puede usarse para crear un espacio entre los dos divs */}
                  </div>
                  <div style={{ padding:"0em 1em", margin:"-3em 0em 0.5em" }}>
                    <h3 style={titleStyle}>Videos:</h3>
                    {videos.map((video) => (
                      <div style={{ ...whiteBackground, display: 'inline-block', padding:"0.6em" }} key={video.id}>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                          {video.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <GeneralData team={team} whiteBackground={whiteBackground}/>
              <div style={{margin:'-0.1em 0em'}}>
                <h3 style={titleStyle}>Claus del partit:</h3>               
                {gameTips.map((point, index) => (
                  <p style={{ ...whiteBackground, display: 'inline-block', margin:'0.1em 0em' }} key={index}>{point ? `- ${point}` : '-Work in progress'}</p>
                ))}
              </div>
              <div>
                <h3 style={titleStyle}>Punts a tenir en compte:</h3>
                <ul className="list-unstyled" style={{ backgroundColor: 'white', display: 'block', padding:"1em" }}>
                  <li className="font-weight-bold" style={{ fontWeight:"bold" }}>Defensa</li>
                  <ul className="list-inline">
                    {defPointsConsider.map((point, index) => (
                      <li className="list-group-item" key={index}>- {point ? point : 'Work in progress'}</li>
                    ))}
                  </ul>
                  <li className="font-weight-bold" style={{ fontWeight:"bold" }}>Ataque</li>
                  <ul className="list-inline">
                    {atcPointsConsider.map((point, index) => (
                      <li className="list-group-item" key={index}>- {point ? point : 'Work in progress'}</li>
                    ))}
                  </ul>
                </ul>
              </div>
            </Col>
            <Col className="col-4">
              <h3 style={titleStyle}>Jugadors Clau:</h3>
              {firstThreePlayers?.map((player) => {

                const playerImportant = team.players?.find((p) => p.id === player.dorsal)?.important || [];
                const [tip1, tip2, tip3] = playerImportant;

                return (
                  <PlayerStats
                    key={player.uuid}
                    player={player}
                    tip1={tip1}
                    tip2={tip2}
                    tip3={tip3}
                  />
                );
              })}
            </Col>
            <Col className="thirdColumn col-4">
              <h3 style={titleStyle}>Jugadors importants:</h3>
              {secondaryPlayers?.map((player) => {

                const playerImportant = team.players?.find((p) => p.id === player.dorsal)?.important || [];
                const [tip1, tip2, tip3] = playerImportant;

                return (
                  <PlayerStats
                    key={player.uuid}
                    player={player}
                    tip1={tip1}
                    tip2={tip2}
                    tip3={tip3}
                  />
                );
              })}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default TeamStats;
