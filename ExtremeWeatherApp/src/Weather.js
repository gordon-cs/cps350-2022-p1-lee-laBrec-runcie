import React, { Component } from 'react';

import WeatherNow from './WeatherNow';

/* Handles Top Level State - Used by WeatherNow to display information retrieved */
export default class ExtremeWeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,

      //Temporary for prototype
      value1: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getWeatherApi = this.getWeatherApi.bind(this);

    //Temporary for prototype
    this.handleParameterChange = this.handleParameterChange.bind(this);
  }

  //Temporary for prototype
  handleParameterChange(newValue) {
    this.setState({
      value1: newValue,
      isLoading: true,
    });
    this.calculateValue(this.state.value1);
  }

    //Temporary for prototype
    async calculateValue(newValue) {
      newValue = newValue * 120;
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
                  onParameterChange={this.handleParameterChange}
                  dangerLevel={this.state.dangerLevel}
                  />
    );
  }
}