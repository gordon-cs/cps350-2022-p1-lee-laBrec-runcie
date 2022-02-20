import React, { Component } from 'react';

import WeatherNow from './WeatherNow';

/* Handles Top Level State - Used by WeatherNow to display information retrieved */
export default class ExtremeWeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      //Temporary for prototype
      temperature: 0,
      humidity: 0,
      precipitation: 0,
      value1: 0,

    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getWeatherApi = this.getWeatherApi.bind(this);

    //Temporary for prototype
    this.updateParameter = this.updateParameter.bind(this);
    this.handleParameterChange = this.handleParameterChange.bind(this);
  }

  //Temporary for prototype
  updateParameter(newValue) {
    this.setState({
      value1: newValue,
    });
  }

  handleParameterChange() {
    this.calculateValue(this.state.value1, this.state.temperature);
  }


  //Temporary for prototype
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
                  updateParameter={this.updateParameter}
                  onParameterChange={this.handleParameterChange}
                  dangerLevel={this.state.dangerLevel}
                  />
    );
  }
}