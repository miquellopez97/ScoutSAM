import React from 'react';

const CircleInfo = ({ avg, number1, number2, text }) => {
  const circleStyle = {
    width: '6em',
    height: '6em',
    borderRadius: '50%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 1em 0 1em',
    position: 'relative',
  };

  // Ajustar el valor del porcentaje entre 0 y 100
  const clipValue = Math.min(Math.max(avg, 0), 100);

  // Calcular el tamaño del fondo relleno según el porcentaje
  const radius = 40; // Modifica este valor para ajustar el tamaño del círculo
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashOffset = ((100 - clipValue) / 100) * circumference;

  const circleBorder = {
    stroke: '#B0B0B0',
    strokeWidth: '7',
    fill: 'transparent',
  };

  const circleFill = {
    stroke: '#A79A54',
    strokeWidth: '7',
    fill: 'transparent',
    strokeDasharray: `${dashArray}`,
    strokeDashoffset: `${dashOffset}`,
  };

  const textStyle = {
    fontSize: '12px', // Tamaño de fuente para los datos dentro del círculo
    fontWeight: 'bold',
    fill: 'black', // Color del texto
    textAnchor: 'middle', // Centrar horizontalmente el texto
    dominantBaseline: 'middle', // Centrar verticalmente el texto
  };

  return (
    <div style={circleStyle}>
      <svg width="9em" height="9em" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} style={circleBorder} />
        <circle cx="50" cy="50" r={radius} style={circleFill} />
        <text x="50" y="30" style={textStyle}>{text}%</text>
        <text x="50" y="50" style={textStyle}>{avg}%</text>
        <text x="50" y="70" style={textStyle}>{number1}/{number2}</text>
      </svg>
    </div>
  );
};

export default CircleInfo;
