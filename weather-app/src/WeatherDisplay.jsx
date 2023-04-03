import React, { useState } from 'react';

function WeatherDisplay({ weatherData }) {
  const { name, main, weather } = weatherData;
  const [unit, setUnit] = useState('Celsius');

  const toggleUnit = () => {
    setUnit(unit === 'Celsius' ? 'Fahrenheit' : 'Celsius');
  };

  const getTemperature = () => {
    if (unit === 'Celsius') {
      return Math.round(main.temp - 273.15);
    } else {
      return Math.round((main.temp - 273.15) * 9 / 5 + 32);
    }
  };

  const getFeelsLike = () => {
    if (unit === 'Celsius') {
      return Math.round(main.feels_like - 273.15);
    } else {
      return Math.round((main.feels_like - 273.15) * 9 / 5 + 32);
    }
  };

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      {weather.length > 0 && (
        <div>
          <img
            
            alt={weather[0].description}
          />
          <p>{weather[0].description}</p>
        </div>
      )}
      <p>{getTemperature()}&deg; {unit}</p>
      <p>Feels like: {getFeelsLike()}&deg; {unit}</p>
      <button onClick={toggleUnit}>
        Toggle {unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
}

export default WeatherDisplay;
