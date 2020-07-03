import React, { Component } from 'react';
import './weatherBox.css';

const WeatherBox = (props) => {
  return (
    <div class="weather-box">
      <div>
        <h1 class="today">Today's Forecast</h1><br></br>
        <div class="jumbotron jumbotron-fluid" style={{ background: 'rgba(18, 17, 21, 0.3)' }}>
          <div><h3 class="city">{props.city}</h3></div>
          <div><p class="temp">{props.weather}</p><br></br></div>
          <div><p class="desc">{props.description}</p><br></br></div>
        </div>
      </div>
    </div >
  );
}

export default WeatherBox