import React, { Component } from 'react';
import './weatherForm.css';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getWeather(this.state.city)
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value })
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} class="weather-form">
          <label>
            Enter City:
          <input name="city" type="text" autoComplete="off" value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <input class="weather-submit" type="submit" value="Get Weather" onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default WeatherForm;