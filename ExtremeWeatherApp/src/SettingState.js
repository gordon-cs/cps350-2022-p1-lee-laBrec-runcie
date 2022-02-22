import React, { Component,} from 'react';
import ReactDOM from 'react-dom'


import Weather from './Weather';
import Settings from './Settings';

/* Handles Top Level State - Used by Settings to display information retrieved */
export default class SettingState extends Weather {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
    this.updateTempPref = this.updateTempPref.bind(this);
    this.updateWindPref = this.updateWindPref.bind(this);
    this.updatePrecipPref = this.updatePrecipPref.bind(this);
    this.updateUVPref = this.updateUVPref.bind(this);
    this.handleParameterChange = this.handleParameterChange.bind(this);
  }

  updateTempPref(newValue) {
    this.setState ({
      tempPref: newValue,
      isLoading: true,
    });
  }

  updateWindPref(newValue) {
    this.setState ({
      windPref: newValue,
      isLoading: true,
    });
  }

  updatePrecipPref(newValue) {
    this.setState ({
      precipPref: newValue,
      isLoading: true,
    });
  }

  updateUVPref(newValue) {
    this.setState ({
      UVPref: newValue,
      isLoading: true,
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  handleParameterChange() {
    this.setParameters(this.state.tempPref, this.state.windPref, this.state.precipPref, this.state.UVPref);
    super.parameterChange();
    this.setState ({
      isLoading: false,
    });
  }

  setParameters(tempLvl, windLvl, precipLvl, uvLvl) {
    localStorage.setItem('temprua', JSON.stringify(tempLvl));
    localStorage.setItem('wind', JSON.stringify(windLvl));
    localStorage.setItem('precipitation', JSON.stringify(precipLvl));
    localStorage.setItem('uvindex', JSON.stringify(uvLvl));
  }

  render() {
    return (
      <Settings updateTempPref={this.updateTempPref}
                updateWindPref={this.updateWindPref}
                updatePrecipPref={this.updatePrecipPref}
                updateUVPref={this.updateUVPref}
                onParameterChange={this.handleParameterChange}
                isLoading={this.state.isLoading}
                />
    );
  }
}
