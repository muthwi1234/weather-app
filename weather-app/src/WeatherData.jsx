import React, { useState, useEffect } from 'react';

function WeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'YOUR_API_KEY_HERE';
  const CITY = 'New York';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.log(error));
  }, [CITY, API_KEY]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.main.temp}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherData;
