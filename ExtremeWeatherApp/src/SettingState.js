import React, { Component,} from 'react';
import ReactDOM from 'react-dom'


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
    console.log("hello0");
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
    //     Before and After system?
    //        Set previous value to before, set new value (if changed) to after
    //          If they are equal - merely setItem of official
    //          If they are not equal - 
    //    1st case is that they do not have have a value at all - in this case make 0.5
    //          If local storage is emtpy - set it to 0.5.
    //  When BOTH templvl and tempbruh are not intialized, intizialize it.
    let tempbruh = JSON.parse(localStorage.getItem('temprua'));
    console.log("start");
    console.log("tempbruh " + tempbruh);
    console.log("templvl "+ tempLvl);
    if (tempLvl === undefined && tempbruh === null) {
      localStorage.setItem('temprua', JSON.stringify(0.5));
      console.log(JSON.parse(localStorage.getItem('temprua')));
    } else if (tempLvl ==='undefined') {

    }
    //    if tempLvl is NULL
    //    2nd case: If they do have a value, just not changed,
    //        Must get from local storage.
    //  When only templvl is undefined. local storage will never be null again.


    // // Get current value of temp
    // let tempbruh = JSON.parse(localStorage.getItem('temprua'));

    // // If null, set default value 0.5 - will only happen once.
    // if (tempbruh === null) {
    //   localStorage.setItem('temprua', JSON.stringify(0.5));
    //   tempbruh = JSON.parse(localStorage.getItem('temprua'));
    // }

    // // If values are the same
    // if ( tempbruh[0] == this.state.tempLvl ) {
    //   localStorage.setItem('temprua', JSON.stringify(tempLvl));
    // }
    // localStorage.setItem('temprua', JSON.stringify(tempLvl));
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
