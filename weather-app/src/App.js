import React, { useState, useEffect } from 'react';

import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');
  const API_KEY = 'YOUR_API_KEY_HERE';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.log(error));
  }, [city, API_KEY]);

  const handleSearch = e => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="city" placeholder="Enter a city" />
        <button type="submit">Search</button>
      </form>
      {weatherData ? (
        <WeatherDisplay weatherData={weatherData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
