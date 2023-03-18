import React, {useState} from 'react';
import React from "react";
import './../styles/App.css';

const WeatherApp = () => {
   const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" });
  const temperatureColor = weather.temperature > 20 ? "red" : "blue";
  return (
    <div>
      <h2>Current weather conditions:</h2>
      <p>Temperature: <span style={{ color: temperatureColor }}>{weather.temperature}°C</span></p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default WeatherApp;
