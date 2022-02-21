import { React, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';
import SettingsButton from './SettingsButton';

// const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
// const [sliderOneValue, setSliderOneValue] = React.useState([5]);
// const sliderOneValuesChangeStart = () => setSliderOneChanging(true);
// const sliderOneValuesChange = values => setSliderOneValue(values);

export default class WeatherNow extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column",}}>
        <Title />
        <SettingsButton />
        <SubTitle isLoading={this.props.isLoading}
                  weatherData={this.props.weatherData} />
        <Dial dangerLevel={this.props.dangerLevel}/>
        <WeatherInfo isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData} />
        <AirQuality isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData}
                    updateParameter={this.props.updateParameter}
                    onParameterChange={this.props.onParameterChange} />
        <Activities />
      </View>
    );
  }
}

/* Title class - no Props needed*/
class Title extends Component {
  render() {
    return (
      <View style = {{
              flex: 1,
              alignItems: "center",
            }}>
        <Image source = {require('./XTRMWFR.png')}/>
      </View>
    );
  }
}

/* SubTitle class shows location.
 *
 * Props:
 *   isLoading - true when weatherData is being fetched
 *   weatherData - JSON returned by fetch from weatherAPI,
 *         but only defined when isLoading is false
 */
class SubTitle extends Component {
  render() {
    let location = 100;
    if ( ! this.props.isLoading) {
      location = this.props.weatherData.location.name;
    }
    return (
      <View style={{
              flex: 1,
              alignItems: "center",
            }}>
        <Text>
          {location}
        </Text>
      </View>
    );
  }
}

class Dial extends Component {
  render() {
    let dangervalue = 100;
    if ( ! this.props.isLoading ) {
      dangervalue = this.props.dangerLevel;
    }
    return (
      <View style={{
              flex: 5,
              alignItems: "center",
            }}>
        <SafeAreaView>
          <TextInput placeholder="Danger Level" textAlign='center'/>
          <RNSpeedometer value={dangervalue} // Make dynamic 
            labels={dialLabels} 
            innerCircleStyle={{backgroundColor: "transparent"}}/>
        </SafeAreaView>
      </View>
    );
  }
}

/* WeatherInfo class shows Humidity, UVindex, Average Temperature, Precipitation.
 *
 * Props:
 *   isLoading - true when weatherData is being fetched
 *   weatherData - JSON returned by fetch from weatherAPI,
 *         but only defined when isLoading is false
 */
class WeatherInfo extends Component {
  render() {
    let CurrTemp = 100;
    let Humidity = 100;
    let UVindex = 100;
    let Precipitation = 100;
    if ( ! this.props.isLoading) {
      CurrTemp = this.props.weatherData.current.temp_f;
      Humidity = this.props.weatherData.current.humidity;
      UVindex = this.props.weatherData.current.uv;
      Precipitation = "Yes";
    }
    return (
      <View style = {{
              flex:1,
            }}>
        <View style = {{
                flex: 1,
                flexDirection: 'row',      
              }}>

          {/* Average Tmp */}
          <View style = {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source = {require('./Temp.png')}/>
            {/* Data */}
            <Text style = {{flex: 1,}}>
              {CurrTemp} F
            </Text>
            <Text style = {{flex: 1,}}>
              Current Tmp
            </Text>
          </View>

          {/* Humidity */}
          <View style= {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source={require('./waterdrop.png')}/>
            <Text style={{flex: 1,}}>
              {/* Data */}
              {Humidity}
            </Text>
            <Text style = {{flex: 1,}}>
              Humidity
            </Text>
          </View>

          {/* Precipitation */}
          <View style = {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source = {require('./cloud.png')}/>
            <Text style = {{flex: 1,}}>
              {/* Data */}
              {Precipitation}
            </Text>
            <Text style = {{flex: 1,}}>
              Precipitation
            </Text>
          </View>

          {/* UV Index */}
          <View style = {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source = {require('./sun.png')}/>
            <Text style = {{flex: 1,}}>
              {/* Data */}
              {UVindex}
            </Text>
            <Text style = {{flex: 1,}}>
              UV Index
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

class AirQuality extends Component {
  render() {
    return (
      <View style = {{
              flex:2,
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
          stepsAs={sliderLabels}
          showSteps
          showStepMarkers
          showStepLabels
          smoothSnapped
          onValuesChangeFinish={this.props.updateParameter}
        />
        <Button 
    style ={{alignItems: "center"}}
          title="SAVE"
          color={"pink"}
          onPress={this.props.onParameterChange}
        />
      </View>
    );
  }
}

class Activities extends Component {
  render() {
    return (
      <View style={{
              flex:1,
            }}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 2, 
    resizeMode: "contain",
  },
  columnflex: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
  },
});

const sliderOptions = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]


//TODO: Implement correctly
const sliderLabels = [
  {
    index: 1,
    stepLabel: "0",
    prefix: "0",
    suffix: "0",
  },
  {
    index: 0,
    stepLabel: "0",
    prefix: "0",
    suffix: "0",
  },
  {
    index: 0,
    stepLabel: "0",
    prefix: "0",
    suffix: "0",
  },
  {
    index: 0,
    stepLabel: "0",
    prefix: "0",
    suffix: "0",
  },
  {
    index: 0,
    stepLabel: "0",
    prefix: "0",
    suffix: "0",
  }
] 

const dialLabels = [
  {
    name: 'None',
    labelColor: '#ff2900',
    activeBarColor: '#00FFFF',
  },
  {
    name: 'Slight',
    labelColor: '#ff5400',
    activeBarColor: '#5FBB4C',
  },
  {
    name: 'Moderate',
    labelColor: '#f4ab44',
    activeBarColor: '#F8ED31',
  },
  {
    name: 'Considerable',
    labelColor: '#f2cf1f',
    activeBarColor: '#FBA81A',
  },
  {
    name: 'Severe',
    labelColor: '#14eb6e',
    activeBarColor: '#EF4136',
  },
  {
    name: 'XTRM',
    labelColor: '#00ff6b',
    activeBarColor: '#ED008C',
  },
]; 