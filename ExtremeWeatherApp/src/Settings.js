import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import PrecipitationMarker from './PrecipitationMarker';
import TempMarker from './TempMarker';
import UVMarker from './UVMarker';
import WindMarker from './WindMarker';



export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column",}}>
        <Title />
        <TempSlider updateTempPref={this.props.updateTempPref}/> 
        <WindSlider  updateWindPref={this.props.updateWindPref}/> 
        <PrecipSlider updatePrecipPref={this.props.updatePrecipPref}/>
        <UVSlider updateUVPref={this.props.updateUVPref}/> 
        <View style = {{flex:0.5}}>
          <Button 
            style ={{alignItems: "center",}}
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
              flex: 1.5,
              alignItems: "center",
            }}>
        <Image source = {require('./XTRMWFR.png')}/>
        <Text style = {{fontSize: 30,}}>
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
          customMarker={TempMarker}
          showSteps
          showStepMarkers
          showStepLabels
          onValuesChangeFinish={this.props.updateTempPref}
        />
        <Text style = {{fontSize: 20,}}>
          Temperature 
        </Text>
      </View>
    );
  }
}

class WindSlider extends Component {
  render() {
    let Pref = [];
    Pref[0] = 0.5;
    let Pref1 = JSON.parse(localStorage.getItem('wind'));
    if (Pref[0] !== 0.5 || Pref1 !== null) {
      Pref = JSON.parse(localStorage.getItem('wind'));
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
          customMarker={WindMarker}
          showSteps
          showStepMarkers
          showStepLabels
          onValuesChangeFinish={this.props.updateWindPref}
        />
        <Text style = {{fontSize: 20,}}>
          Wind 
        </Text>
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
          customMarker={PrecipitationMarker}
          showSteps
          showStepMarkers
          showStepLabels
          onValuesChangeFinish={this.props.updatePrecipPref}
        />
        <Text style = {{fontSize: 20,}}>
          Precipitation 
        </Text>
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
          customMarker={UVMarker}
          showSteps
          showStepMarkers
          showStepLabels
          onValuesChangeFinish={this.props.updateUVPref}
        />
        <Text style = {{fontSize: 20,}}>
          UV 
        </Text>
      </View>
    );
  }
}

const sliderOptions = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]