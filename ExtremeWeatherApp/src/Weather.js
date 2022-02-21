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
      valueHumid: 0,
      valuePrecip: 0,
      valueUV: 0,
      valueTemp: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getWeatherApi = this.getWeatherApi.bind(this);
  }
  
  async parameterChange() {
    this.calculateValue(this.state.temperature, this.state.humidity, this.state.precipitation, this.state.UVindex)
  }

  async calculateValue(Temp, Humid, Precip, UV, valueTemp) {
    console.log(JSON.parse(localStorage.getItem('temprua')));
    console.log(Temp);
    console.log(valueTemp);
    // newValue = temperature * valueTemp;
    // this.setState({
    //   dangerLevel: newValue,
    //   isLoading: false,
    // });
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