import React, { Component } from 'react';

import WeatherNow from './WeatherNow';

/* Handles Top Level State - Used by WeatherNow and Settings to display information retrieved */
export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      temperature: 0,
      humidity: 0,
      precipitation: 0,
      UVindex: 0,
      dangerLevel: 30,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getWeatherApi = this.getWeatherApi.bind(this);
    this.parameterChange = this.parameterChange.bind(this);
    this.calculateValue = this.calculateValue.bind(this);
  }
  
  parameterChange() {
    this.forceUpdate();
    this.calculateValue(this.state.temperature, this.state.humidity, this.state.precipitation, this.state.UVindex)
  }

  calculateValue(Temp, Humid, Precip, UV) {
    this.forceUpdate();
    let prefTemp = JSON.parse(localStorage.getItem('temprua'));
    let prefHumid = JSON.parse(localStorage.getItem('humitidy'));
    let prefPrecip = JSON.parse(localStorage.getItem('precipitation'));
    let prefUV = JSON.parse(localStorage.getItem('uvindex'));
    finalValue = prefTemp[0] * 25;
    // Temp = 75 - (2.870265 * Temp) + ((0.0280494 * Temp) * (0.0280494 * Temp));
    Temp = 65;
    // localStorage.setItem('dangerLevel', JSON.stringify(Temp));
    this.setState({
      dangerLevel: 45,
      isLoading: true,
    });
    this.forceUpdate();
  }

  shouldComponentUpdate() {
    return true;
  }
  
  componentDidMount() {
    this.getWeatherApi();
  }

  async getWeatherApi() {
    // TODO: Move API key off of repo
    try {
      let response = await fetch ("http://api.weatherapi.com/v1/current.json?key=a23ef8a8a6194ac4a6d194322220102&q=01984&aqi=no");
      let responseJson = await response.json();
      this.setState({
        isLoading: false,
        weatherData: responseJson,
        temperature: responseJson.current.temp_f,
        humidity: responseJson.current.humidity,
        UVindex: responseJson.current.uv,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <WeatherNow isLoading={this.state.isLoading}
                  weatherData={this.state.weatherData}
                  dangerLevel={this.state.dangerLevel}
                  />
    );
  }
}