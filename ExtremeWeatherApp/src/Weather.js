import React, { Component } from 'react';

import WeatherNow from './WeatherNow';

/* Handles Top Level State - Used by WeatherNow and Settings to display information retrieved */
export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      temperature: 0,
      wind: 0,
      precipitation: "",
      UVindex: 0,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getWeatherApi = this.getWeatherApi.bind(this);
    this.parameterChange = this.parameterChange.bind(this);
    this.calculateValue = this.calculateValue.bind(this);
  }
  
  parameterChange() {
    this.forceUpdate();
    this.calculateValue(this.state.temperature, this.state.wind, this.state.precipitation, this.state.UVindex)
  }

  calculateValue(Temp, Wind, Precip, UV) {
    this.forceUpdate();
    const prefTemp = JSON.parse(localStorage.getItem('temprua'));
    const prefWind = JSON.parse(localStorage.getItem('wind'));
    const prefUV = JSON.parse(localStorage.getItem('uvindex'));
    const prefPrecip = JSON.parse(localStorage.getItem('precipitation'));

    // Calculate scores for each factor
    const tempScore = 75 - (2.870265 * Temp) + ((0.0280494 * Temp * Temp));
    const windScore = 1.526 + (1.579 * Wind) + (-0.005 * Wind * Wind);
    const uvScore = 12.5 * UV;
    if (uvScore > 100) {
      uvScore = 100;
    }
    const precipScore = getPrecipScore(Precip);

    // Calculate percentages of total score for each factor
    const factorSum = prefTemp + prefWind 
                    + prefUV + prefPrecip;
    const tempPerc = prefTemp/factorSum;
    const windPerc = prefWind/factorSum;
    const uvPerc = prefUV/factorSum;
    const precipPerc = prefPrecip/factorSum;

    let dangerValue = ((tempScore * tempPerc) 
                        + (windScore * windPerc)
                        + (uvScore * uvPerc)
                        + (precipScore * precipPerc));
    dangerValue = dangerValue * 2;
    console.log (dangerValue);
    localStorage.setItem('dangerLevel', JSON.stringify(dangerValue))
  }

  shouldComponentUpdate() {
    return true;
  }
  
  componentDidMount() {
    this.getWeatherApi();
  }

  async getWeatherApi() {
    try {
        let location = "01984";
        let query = "http://api.weatherapi.com/v1/current.json?key=a23ef8a8a6194ac4a6d194322220102&q=" 
                    + location + "&aqi=no";
        let query1 = "http://api.weatherapi.com/v1/current.json?key=a23ef8a8a6194ac4a6d194322220102&q=Juneau&aqi=no"
        let query2 ="http://api.weatherapi.com/v1/current.json?key=a23ef8a8a6194ac4a6d194322220102&q=Dubai&aqi=no"
        let query3 = "http://api.weatherapi.com/v1/current.json?key=a23ef8a8a6194ac4a6d194322220102&q=Kampala&aqi=no"
        let query4 = "http://api.weatherapi.com/v1/current.json?key=a23ef8a8a6194ac4a6d194322220102&q=Nagasaki&aqi=no"
        let response = await fetch (query);
        let responseJson = await response.json();
        this.setState({
            isLoading: false,
            weatherData: responseJson,
            temperature: responseJson.current.temp_f,
            wind: responseJson.current.wind_mph,
            UVindex: responseJson.current.uv,
        precipitation: responseJson.current.condition.text,
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

function getPrecipScore(conditionText) {
  if ((conditionText == "Sunny") || (conditionText == "Clear")) {
      return 0;
  } else if (conditionText == "Partly cloudy") {
      return 5;
  } else if (conditionText == "Cloudy") {
      return 10;
  } else if (conditionText == "Overcast") {
      return 15;
  } else if (conditionText == "Mist") {
      return 40;
  } else if (conditionText == "Patchy rain possible") {
      return 20;
  } else if (conditionText == "Patchy snow possible") {
      return 25;
  } else if (conditionText == "Patchy sleet possible") {
      return 22;
  } else if (conditionText == "Patchy freezing drizzle possible") {
      return 22;
  } else if (conditionText == "Thundery outbreaks possible") {
      return 30;
  } else if (conditionText == "Blowing snow") {
      return 60;
  } else if (conditionText == "Blizzard") {
      return 100;
  } else if (conditionText == "Fog") {
      return 75;
  } else if (conditionText == "Freezing fog") {
      return 80;
  } else if (conditionText == "Patchy light drizzle") {
      return 20;
  } else if (conditionText == "Light drizzle") {
      return 22;
  } else if (conditionText == "Freezing drizzle") {
      return 30;
  } else if (conditionText == "Heavy freezing drizzle") {
      return 35;
  } else if (conditionText == "Patchy light rain") {
      return 28;
  } else if (conditionText == "Light rain") {
      return 32;
  } else if (conditionText == "Moderate rain at times") {
      return 38;
  } else if (conditionText == "Moderate rain") {
      return 45;
  } else if (conditionText == "Heavy rain at times") {
      return 50;
  } else if (conditionText == "Heavy rain") {
      return 60;
  } else if (conditionText == "Light freezing rain") {
      return 42;
  } else if (conditionText == "Moderate or heavy freezing rain") {
      return 58;
  } else if (conditionText == "Light sleet") {
      return 55;
  } else if (conditionText == "Moderate or heavy sleet") {
      return 68;
  } else if (conditionText == "Patchy light snow") {
      return 47;
  } else if (conditionText == "Light snow") {
      return 52;
  } else if (conditionText == "Patchy moderate snow") {
      return 56;
  } else if (conditionText == "Moderate snow") {
      return 65;
  } else if (conditionText == "Patchy heavy snow") {
      return 70;
  } else if (conditionText == "Heavy snow") {
      return 75;
  } else if (conditionText == "Ice pellets") {
      return 75;
  } else if (conditionText == "Light rain shower") {
      return 25;
  } else if (conditionText == "Moderate or heavy rain shower") {
      return 40;
  } else if (conditionText == "Torrential rain shower") {
      return 65;
  } else if (conditionText == "Light sleet showers") {
      return 50;
  } else if (conditionText == "Moderate or heavy sleet showers") {
      return 63;
  } else if (conditionText == "Light snow showers") {
      return 47;
  } else if (conditionText == "Moderate or heavy snow showers") {
      return 68;
  } else if (conditionText == "Light showers of ice pellets") {
      return 70;
  } else if (conditionText == "Moderate or heavy showers of ice pellets") {
      return 75;
  } else if (conditionText == "Patchy light rain with thunder") {
      return 38;
  } else if (conditionText == "Moderate or heavy rain with thunder") {
      return 62;
  } else if (conditionText == "Patchy light snow with thunder") {
      return 57;
  } else if (conditionText == "Moderate or heavy snow with thunder") {
      return 85;
  } else {
      return 0;
  }
}