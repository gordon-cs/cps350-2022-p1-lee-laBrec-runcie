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
        <PrefSlider isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData}
                    updateTempPref={this.props.updateTempPref}
                    /> 
        <PrefSlider isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData}
                    updateParameter={this.props.updateParameter}
                    /> 
        <PrefSlider isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData}
                    updateParameter={this.props.updateParameter}
                    />
        <PrefSlider isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData}
                    updateParameter={this.props.updateParameter}
                    /> 
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

class PrefSlider extends Component {
  render() {
    return (
      <View style = {{
              flex:1,
              alignItems: 'center',
              paddingTop: "10%",
            }}>
        <MultiSlider values={[0]}
          enableLabel
          sliderLength={350}
          step = {3}
          min={0}
          max={10}
          optionsArray={sliderOptions}
          customMarker={CustomMarker}
          showSteps
          showStepMarkers
          showStepLabels
          smoothSnapped
          onValuesChangeFinish={this.props.updateTempPref}
        />
      </View>
    );
  }
}

const sliderOptions = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]