import React, { Component,} from 'react';

import Weather from './Weather';
import Settings from './Settings';

/* Handles Top Level State - Used by Settings to display information retrieved */
export default class SettingState extends Weather {
  constructor(props) {
    super(props);
    this.state = {
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
    });
  }

  updateWindPref(newValue) {
    this.setState ({
      windPref: newValue,

    });
  }

  updatePrecipPref(newValue) {
    this.setState ({
      precipPref: newValue,
    });
  }

  updateUVPref(newValue) {
    this.setState ({
      UVPref: newValue,
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  handleParameterChange() {
    this.setParameters(this.state.tempPref, this.state.windPref, this.state.precipPref, this.state.UVPref);
    super.parameterChange();
  }

  setParameters(tempLvl, windLvl, precipLvl, uvLvl) {
    // IF values change then proceed normally. - Templvl is able to function.
    // localStorage.setItem('temprua', JSON.stringify(tempLvl));

    //    If they DO NOT change - this means they are not getting an input value. 
    //    1st case is that they do not have have a value at all - in this case make 0.5
    //          If local storage is emtpy - set it to 0.5.
    //  When BOTH templvl and temperatureTEMP are not intialized, intizialize it.
    let temperatureTEMP = JSON.parse(localStorage.getItem('temprua'));
    if (tempLvl === undefined && temperatureTEMP === null) {
      localStorage.setItem('temprua', JSON.stringify(0.5));

    //    if tempLvl is NULL
    //    2nd case: If they do have a value, just not changed,
    //        Must get from local storage.
    //  When only templvl is undefined. local storage will never be null again.
    } else if (tempLvl === undefined && temperatureTEMP !== null) {
        temperatureTEMP = JSON.parse(localStorage.getItem('temprua'));
        localStorage.setItem('temprua', JSON.stringify(temperatureTEMP));
    } else {
      localStorage.setItem('temprua', tempLvl);
    }
    
    let WindTEMP = JSON.parse(localStorage.getItem('wind'));
    if (windLvl === undefined && WindTEMP === null) {
      localStorage.setItem('wind', JSON.stringify(0.5));
    } else if (windLvl === undefined && WindTEMP !== null) {
      WindTEMP = JSON.parse(localStorage.getItem('wind'));
      localStorage.setItem('wind', JSON.stringify(WindTEMP));
    } else {
      localStorage.setItem('wind', windLvl);
    }

    let PrecipTEMP = JSON.parse(localStorage.getItem('precipitation'));
    if (precipLvl === undefined && PrecipTEMP === null) {
      localStorage.setItem('precipitation', JSON.stringify(0.5));
    } else if (precipLvl === undefined && PrecipTEMP !== null) {
      PrecipTEMP = JSON.parse(localStorage.getItem('precipitation'));
      localStorage.setItem('precipitation', JSON.stringify(PrecipTEMP));
    } else {
      localStorage.setItem('precipitation', precipLvl);
    }

    let UVTEMP = JSON.parse(localStorage.getItem('uvindex'));
    if (uvLvl === undefined && UVTEMP === null) {
      localStorage.setItem('uvindex', JSON.stringify(0.5));
    } else if (uvLvl === undefined && UVTEMP !== null) {
      UVTEMP = JSON.parse(localStorage.getItem('uvindex'));
      localStorage.setItem('uvindex', JSON.stringify(UVTEMP));
    } else {
      localStorage.setItem('uvindex', uvLvl);
    }
  }

  render() {
    return (
      <Settings updateTempPref={this.updateTempPref}
                updateWindPref={this.updateWindPref}
                updatePrecipPref={this.updatePrecipPref}
                updateUVPref={this.updateUVPref}
                onParameterChange={this.handleParameterChange}
      />
    );
  }
}
