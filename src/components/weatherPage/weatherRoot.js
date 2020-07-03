import React from 'react';
import WeatherBox from './weatherBox.js'
import WeatherForm from './weatherForm.js'
import { withRouter } from "react-router";
import './weatherRoot.css';

class WeatherRoot extends React.Component {
  state = {
    city: '',
    country: '',
    weather: [],
    description: '',
    temp_max: [],
    temp_min: [],
    password: ''
  }

  getWeather = (city) => { 
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState(() => ({
          city: data.name,
          country: data.sys.country,
          weather: data.main.temp,
          description: data.weather[0].description,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max
        }))
        this.getPassword()
      })
  }

  getPassword = (password) => {
    fetch(`http://localhost:3001/login`)
      .then(response => response.json())
      .then(data => {
        if (data[data.length - 1].password.toLowerCase() === this.state.city.toLowerCase()) {
          this.props.history.push('/private')
        }
      })
  }

  render() {
    return (
      <div class="weather-root">
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <div class="col-sm-4"></div>
            <WeatherBox
              city={this.state.city}
              country={this.state.country}
              weather={this.state.weather}
              description={this.state.description}
              temp_min={this.state.temp_min}
              temp_max={this.state.temp_max}
            /><br />
            <WeatherForm
              getPassword={this.getPassword}
              getWeather={this.getWeather}
            />
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div >
    );
  }
}

export default withRouter(WeatherRoot);