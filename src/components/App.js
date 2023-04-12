import React from 'react';
import ReactDOM from 'react-dom';

function Weather({ temperature, conditions }) {
  const color = temperature > 20 ? 'red' : 'blue';
  return (
    <div style={{ color }}>
      <p>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

const weatherInput = { temperature: 25, conditions: "Sunny" };

ReactDOM.render(
  <Weather temperature={weatherInput.temperature} conditions={weatherInput.conditions} />,
  document.getElementById('root')
);
