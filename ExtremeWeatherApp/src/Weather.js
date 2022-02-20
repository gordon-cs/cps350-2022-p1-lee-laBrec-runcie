import React, { Component } from 'react';

import WeatherNow from './WeatherNow';

/* Handles Top Level State - Used by WeatherNow to display information retrieved */
export default class ExtremeWeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      temperature: 0,
      humidity: 0,
      precipitation: 0,
      UVindex: 0,
      valueTemp: 0,
      valueHumid: 0,
      valuePrecip: 0,
      valueUV: 0,

    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getWeatherApi = this.getWeatherApi.bind(this);

    this.updateTempPref = this.updateTempPref.bind(this);
    this.updateHumidityPref = this.updateHumidityPref.bind(this);
    this.updatePrecipPref = this.updatePrecipPref.bind(this);
    this.updateUVPref = this.updateUVPref.bind(this);
    this.handleParameterChange = this.handleParameterChange.bind(this);
  }

  updateTempPref(newValue) {
    this.setState({
      valueTemp: newValue,
    });
  }

  updateHumidityPref(newValue) {
    this.setState({
      valueHumid: newValue,
    });
  }

  updatePrecipPref(newValue) {
    this.setState({
      valuePrecip: newValue,
    });
  }

  updateUVPref(newValue) {
    this.setState({
      valueUV: newValue,
    });
  }

  handleParameterChange() {
    this.calculateValue(this.state.value1, this.state.temperature);
  }


  async calculateValue(newValue, temperature) {
    newValue = temperature * newValue;
    this.setState({
      dangerLevel: newValue,
      isLoading: false,
    });
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

                  // Temporary for prototype
                  updateTempPref={this.updateTempPref}
                  updateHumidityPref={this.updateHumidityPref}
                  updatePrecipPref={this.updatePrecipPref}
                  updateUVPref={this.updateUVPref}
                  onParameterChange={this.handleParameterChange}
                  dangerLevel={this.state.dangerLevel}
                  />
    );
  }
}