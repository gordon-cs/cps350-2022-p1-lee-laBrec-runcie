import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';

// const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
// const [sliderOneValue, setSliderOneValue] = React.useState([5]);
// const sliderOneValuesChangeStart = () => setSliderOneChanging(true);
// const sliderOneValuesChange = values => setSliderOneValue(values);

export default class WeatherNow extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column",}}>
        <Title />
        <SubTitle isLoading={this.props.isLoading}
                  weatherData={this.props.weatherData} />
        <Dial />
        <WeatherInfo isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData} />
        <AirQuality isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData} />
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
        <Text style = {{fontSize: 70,}}>
          XTRM WFR
        </Text>
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
    return (
      <View style={{
              flex: 4,
              alignItems: "center",
            }}>
        <SafeAreaView>
          <TextInput placeholder="Danger Level" textAlign='center'/>
          <RNSpeedometer value={68} // Make dynamic 
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
    let AverageTemp = 100;
    let Humidity = 100;
    let UVindex = 100;
    let Precipitation = 100;
    if ( ! this.props.isLoading) {
      AverageTemp = "Yes";
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
                  source = {require('./download.png')}/>
            {/* Data */}
            <Text style = {{flex: 1,}}>
              {AverageTemp}
            </Text>
            <Text style = {{flex: 1,}}>
              Average Tmp
            </Text>
          </View>

          {/* Humidity */}
          <View style= {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source={require('./download.png')}/>
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
                  source = {require('./download.png')}/>
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
                  source = {require('./download.png')}/>
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
              flex:1,
              alignItems: 'center',
            }}>
        <MultiSlider values={[0]}
          enableLabel
          sliderLength={350}
          step = {10}
          showStepLabels
          min={0}
          max={10}
          optionsArray={sliderOptions}
          customMarker={CustomMarker}
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
    width: 100, 
    height: 100,
  },
  columnflex: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
  },
});

const sliderOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dialLabels = [
  {
    name: '16.67',
    labelColor: '#ff2900',
    activeBarColor: '#00FFFF',
  },
  {
    name: '33.34',
    labelColor: '#ff5400',
    activeBarColor: '#5FBB4C',
  },
  {
    name: '50',
    labelColor: '#f4ab44',
    activeBarColor: '#F8ED31',
  },
  {
    name: 'Severe',
    labelColor: '#f2cf1f',
    activeBarColor: '#FBA81A',
  },
  {
    name: '83.35',
    labelColor: '#14eb6e',
    activeBarColor: '#EF4136',
  },
  {
    name: '100',
    labelColor: '#00ff6b',
    activeBarColor: '#ED008C',
  },
]; 