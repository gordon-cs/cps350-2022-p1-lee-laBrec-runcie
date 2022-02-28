import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  Button,
  Pressable,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import PrecipitationMarker from './PrecipitationMarker';
import TempMarker from './TempMarker';
import UVMarker from './UVMarker';
import WindMarker from './WindMarker';
import BackButton from './BackButton';



export default class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column",}}>
        <BackButton />
        <Title />
        <TempSlider updateTempPref={this.props.updateTempPref}/> 
        <WindSlider  updateWindPref={this.props.updateWindPref}/> 
        <PrecipSlider updatePrecipPref={this.props.updatePrecipPref}/>
        <UVSlider updateUVPref={this.props.updateUVPref}/> 
        <View style = {{flex:1}}>
          <SaveButton onParameterChange={this.props.onParameterChange} />
        </View>
        <View style={{ flex: 1.5 }}></View>
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
              flexDirection: 'column',
            }}>
        <View style={{ flex: 1.5}}>
          <Image source = {require('./assets/XTRMWFR.png')}/>
        </View>
        <View style={{ flex: 1 }}>
          <Image source = {require("./assets/balance.png")}/>
        </View>
        <View style={{ flex: 0.5 }}>
          <Image source = {require("./assets/line.png")}/>
        </View>
      </View>
    );
  }
}

class TempSlider extends Component {
  render() {
    let tempPref = [];
    tempPref[0] = 0.5;
    let tempPref1 = JSON.parse(localStorage.getItem('temprua'));
    if (tempPref[0] !== 0.5 || tempPref1 !== null ) {
      tempPref = JSON.parse(localStorage.getItem('temprua'));
    }
    let length = 300;
    return (
      <View style = {{
              flex: 1.5,
              alignItems: 'center',
              paddingTop: "10%",
            }}>
        <Image source = {require('./assets/tempslider.png')}/>
        <View style = {{flex: 1, 
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    flexDirection: "column",} }>
          <MultiSlider
            sliderLength={length}
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
            smoothSnapped/>
          </View>
        
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
    let length = 300;
    return (
      <View style = {{
              flex: 1.5,
              alignItems: 'center',
              paddingTop: "10%",
            }}> 
        <Image source = {require('./assets/windslider.png')}/>
        <View style = {{flex: 1, 
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    flexDirection: "column",}}>
          <MultiSlider
            sliderLength={length}
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
            smoothSnapped/>
        </View>
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
    let length = 300;
    return (
      <View style = {{
              flex: 1.5,
              alignItems: 'center',
              paddingTop: "10%",
            }}> 
        <Image source = {require('./assets/precipslider.png')}/>
        <View style = {{flex: 1, 
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    flexDirection: "column",}}>
          <MultiSlider
            sliderLength={length}
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
            smoothSnapped/>
        </View>
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
    let length = 300;
    return (
      <View style = {{
              flex: 1.5,
              alignItems: 'center',
              paddingTop: "10%",
            }}> 
        <Image source = {require('./assets/uvslider.png')}/>
        <View style = {{flex: 1, 
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    flexDirection: "column",}}>
          <MultiSlider
            sliderLength={length}
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
            smoothSnapped/>
        </View>
      </View>
    );
  }
}

class SaveButton extends Component {
  render () {
    return (
      <Pressable style ={{alignItems: "center",}} 
                  onPress={this.props.onParameterChange}>
        <Image source={require('./assets/savebutton.png')}
                  style={{resizeMode: "cover",}}/>
      </Pressable>
    );
  }
}

const sliderOptions = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]