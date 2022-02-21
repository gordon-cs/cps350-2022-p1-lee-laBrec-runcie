import React, { Component, } from 'react';

import Weather from './Weather';
import Settings from './Settings';

/* Handles Top Level State - Used by Settings to display information retrieved */
export default class SettingState extends Weather {
  constructor(props) {
    super(props);
    this.updateTempPref = this.updateTempPref.bind(this);
    this.updateHumidityPref = this.updateHumidityPref.bind(this);
    this.updatePrecipPref = this.updatePrecipPref.bind(this);
    this.updateUVPref = this.updateUVPref.bind(this);
    this.handleParameterChange = this.handleParameterChange.bind(this);
  }

  updateTempPref(newValue) {
    localStorage.setItem('temprua', JSON.stringify(newValue));
  }

  updateHumidityPref(newValue) {
    localStorage.setItem('humidity', newValue);
  }

  updatePrecipPref(newValue) {
    localStorage.setItem('precipitation', newValue);
  }

  updateUVPref(newValue) {
    localStorage.setItem('UV', newValue);
  }

  handleParameterChange() {
    super.calculateValue(localStorage.getItem('tempura'), super.temperature);
  }

  render() {
    return (
      <Settings updateTempPref={this.updateTempPref}
                updateHumidityPref={this.updateHumidityPref}
                updatePrecipPref={this.updatePrecipPref}
                updateUVPref={this.updateUVPref}
                onParameterChange={this.handleParameterChange}
                />
    );
  }
}