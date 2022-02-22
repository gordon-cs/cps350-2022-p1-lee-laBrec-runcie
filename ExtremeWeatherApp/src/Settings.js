import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';

export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column",}}>
        <Title />
        <TempSlider updateTempPref={this.props.updateTempPref}/> 
        <HumidSlider  updateHumidityPref={this.props.updateHumidityPref}/> 
        <PrecipSlider updatePrecipPref={this.props.updatePrecipPref}/>
        <UVSlider updateUVPref={this.props.updateUVPref}/> 
        <View style = {{flex:1}}>
          <Button 
            style ={{alignItems: "center"}}
            title="SAVE"
            color={"pink"}
            onPress={this.props.onParameterChange}
          />
        </View>
      </View>
    );
  }
}

/* Title class - no Props needed*/
class Title extends Component {
  render() {
    return (
      <View style = {{
              flex: 2,
              alignItems: "center",
            }}>
        <Image source = {require('./XTRMWFR.png')}/>
        <Text>
          Preferences
        </Text>
      </View>
    );
  }
}

class TempSlider extends Component {
  render() {
    let tempPref = [];
    tempPref[0] = 0.5;
    let tempPref1 = JSON.parse(localStorage.getItem('temprua'));
    if (tempPref[0] !== 0.5 || tempPref1 !== null) {
      tempPref = JSON.parse(localStorage.getItem('temprua'));
    }
    return (
      <View style = {{
              flex: 1,
              alignItems: 'center',
              paddingTop: "10%",
            }}> 
        <MultiSlider values={[0]}
          enableLabel
          sliderLength={350}
          step = {3}
          values = {tempPref}
          min={0}
          max={10}
          optionsArray={sliderOptions}
          customMarker={CustomMarker}
          showSteps
          showStepMarkers
          showStepLabels
          onValuesChangeFinish={this.props.updateTempPref}
        />
      </View>
    );
  }
}

class HumidSlider extends Component {
  render() {
    let Pref = [];
    Pref[0] = 0.5;
    let Pref1 = JSON.parse(localStorage.getItem('humidity'));
    if (Pref[0] !== 0.5 || Pref1 !== null) {
      Pref = JSON.parse(localStorage.getItem('humidity'));
    }
    return (
      <View style = {{
              flex: 1,
              alignItems: 'center',
              paddingTop: "10%",
            }}> 
        <MultiSlider values={[0]}
          enableLabel
          sliderLength={350}
          step = {3}
          values = {Pref}
          min={0}
          max={10}
          optionsArray={sliderOptions}
          customMarker={CustomMarker}
          showSteps
          showStepMarkers
          showStepLabels
          onValuesChangeFinish={this.props.updateHumidityPref}
        />
      </View>
    );
  }
}

class PrecipSlider extends Component {
  render() {
    let Pref = [];
    Pref[0] = 0.5;
    let Pref1 = JSON.parse(localStorage.getItem('precipitation'));
    if (Pref[0] !== 0.5 || Pref1 !== null) {
      Pref = JSON.parse(localStorage.getItem('precipitation'));
    }
    return (
      <View style = {{
              flex: 1,
              alignItems: 'center',
              paddingTop: "10%",
            }}> 
        <MultiSlider values={[0]}
          enableLabel
          sliderLength={350}
          step = {3}
          values = {Pref}
          min={0}
          max={10}
          optionsArray={sliderOptions}
          customMarker={CustomMarker}
          showSteps
          showStepMarkers
          showStepLabels
          onValuesChangeFinish={this.props.updatePrecipPref}
        />
      </View>
    );
  }
}

class UVSlider extends Component {
  render() {
    let Pref = [];
    Pref[0] = 0.5;
    let Pref1 = JSON.parse(localStorage.getItem('uvindex'));
    if (Pref[0] !== 0.5 || Pref1 !== null) {
      Pref = JSON.parse(localStorage.getItem('uvindex'));
    }
    return (
      <View style = {{
              flex: 1,
              alignItems: 'center',
              paddingTop: "10%",
            }}> 
        <MultiSlider values={[0]}
          enableLabel
          sliderLength={350}
          step = {3}
          values = {Pref}
          min={0}
          max={10}
          optionsArray={sliderOptions}
          customMarker={CustomMarker}
          showSteps
          showStepMarkers
          showStepLabels
          onValuesChangeFinish={this.props.updateUVPref}
        />
      </View>
    );
  }
}

const sliderOptions = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]