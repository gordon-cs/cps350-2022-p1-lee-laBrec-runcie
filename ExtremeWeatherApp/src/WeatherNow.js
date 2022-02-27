import { React, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable
} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import SettingsButton from './SettingsButton';
import Recommendations from './Recommendations';
import HelpButton from './HelpButton';

export default class WeatherNow extends Component {
  update = () => {
    // Calling the forceUpdate() method
    this.forceUpdate();
  };
  render() {
    let dangervalue = [];
    let dangerValue;
    if (JSON.parse(localStorage.getItem('dangerLevel')) === null) {
      localStorage.setItem('dangerLevel', JSON.stringify(10))
      dangervalue[0] = JSON.parse(localStorage.getItem('dangerLevel'));
      dangerValue = dangervalue[0];
    } else {
      dangervalue[0] = JSON.parse(localStorage.getItem('dangerLevel'));
      dangerValue = dangervalue[0];
    } ///////////////////////////////////////////////////////////////////
    return (
      <View style={{ flex: 1, flexDirection: "column"}}>

        {/* 1 */}
        <View style={{ flex: 0.3, flexDirection: "column"}}>
          <View style={{flex: 1, paddingTop: 15, flexDirection: 'row',}}>
            <HelpButton />
            {/* Refresh Button */}
            <View style={{flex: 1.5, }}>
              <Pressable onPress={() => this.forceUpdate()}>
                <Image source={require('./assets/refreshicon.png')}
                       style={{
                          resizeMode: "cover",
                          height: 30,
                          width: 30,
                       }}/>
              </Pressable>
            </View>
            <View style={{flex: 10,}}></View>
            <SettingsButton />
          </View>
        </View>

        {/* 2 */}
        <View style={{ flex: 2,}}>
          <Title isLoading={this.props.isLoading}
                  weatherData={this.props.weatherData}/>
        </View>

        {/* 3 */}
        <View style={{ flex: 1.5,}}>
          <Dial dangerLevel={this.props.dangerLevel}/>
        </View>

        {/* 4 */}
        <View style={{ flex: 1.5,}}></View>

        {/* 5 */}
        <View style={{ flex: 1, flexDirection: "column"}}>
          <WeatherInfo isLoading={this.props.isLoading}
                        weatherData={this.props.weatherData} />
        </View>
        <View style={{ flex: 2,}}>
          <Recommendations dangerLevel={dangerValue} />
        </View>

      </View>
    );
  }
}

/* Title class - no Props needed*/
class Title extends Component {
  render() {
    let location;
    if ( ! this.props.isLoading) {
      location = this.props.weatherData.location.name;
    }
    return (
      <View style = {{
              flex: 1,
              alignItems: "center",
              flexDirection: "column"
            }}>
        <View style = {{flex: 2}}>
          <Image source = {require('./assets/XTRMWFR.png')}/>
        </View>
        <View style = {{flex: 1.5}}>
          <Image style source = {require("./assets/itsDangerousOutThere.png")}/>
        </View>
        <View style = {{flex: 0.7}}>
          <Image source = {require("./assets/line.png")}/>
        </View>
        <View style = {{flex: 1.5, alignItems:'flex-start'}}>
          <Text style={{fontFamily: 'sans-serif-medium', fontSize: 25,}}>
            {location}
          </Text>
        </View>
      </View>
    );
  }
}


class Dial extends Component {
  update = () => {
    // calling the forceUpdate() method
    this.forceUpdate();
  };
  render() {
    let dangervalue = [];
    let dangerValue;
    if (JSON.parse(localStorage.getItem('dangerLevel')) === null) {
      localStorage.setItem('dangerLevel', JSON.stringify(10))
    } else {
      dangervalue[0] = JSON.parse(localStorage.getItem('dangerLevel'));
      dangerValue = dangervalue[0];
    }
    return (
      <View style={{
              alignItems: "center",
            }}>
        <SafeAreaView>
          <RNSpeedometer value={dangerValue}
            labels={dialLabels} 
            innerCircleStyle={{backgroundColor: "#6D6D6D", height: 75, width: 150}}
            needleImage={require('./dial/arrow.png')}
            imageWrapperStyle={{paddingTop: 0}}
            labelNoteStyle={{backgroundColor: '#343434', padding: 10, borderRadius: 20}}/>
        </SafeAreaView>
      </View>
    );
  }
}

/* WeatherInfo class shows Wind, UVindex, Average Temperature, Precipitation.
 *
 * Props:
 *   isLoading - true when weatherData is being fetched
 *   weatherData - JSON returned by fetch from weatherAPI,
 *         but only defined when isLoading is false
 */
class WeatherInfo extends Component {
  render() {
    let CurrTemp;
    let Wind;
    let UVindex;
    let Precipitation;
    if ( ! this.props.isLoading) {
      CurrTemp = this.props.weatherData.current.temp_f;
      Wind = this.props.weatherData.current.wind_mph;
      UVindex = this.props.weatherData.current.uv;
      Precipitation = this.props.weatherData.current.condition.text;
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
                  source = {require('./assets/Temp.png')}/>
            {/* Data */}
            <Text style = {styles.weatherInfoData}>
              {CurrTemp} °F
            </Text>
            <Text style = {styles.weatherInfoText}>
              Current Temp
            </Text>
          </View>

          {/* Wind */}
          <View style= {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source={require('./assets/Wind.png')}/>
            <Text style = {styles.weatherInfoData}>
              {/* Data */}
              {Wind} MPH
            </Text>
            <Text style = {styles.weatherInfoText}>
              Wind
            </Text>
          </View>

          {/* Precipitation */}
          <View style = {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source = {require('./assets/cloud.png')}/>
            <Text style = {styles.weatherInfoData}>
              {/* Data */}
              {Precipitation}
            </Text>
            <Text style = {styles.weatherInfoText}>
              Precipitation
            </Text>
          </View>

          {/* UV Index */}
          <View style = {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source = {require('./assets/sun.png')}/>
            <Text style = {styles.weatherInfoData}>
              {/* Data */}
              {UVindex}
            </Text>
            <Text style = {styles.weatherInfoText}>
              UV Index
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1.5, 
    resizeMode: "contain",
  },
  columnflex: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
  },
  weatherInfoData: {
    flex: 1, 
    fontSize: 20, 
    fontFamily: "sans-serif-medium", 
    color: "white"
  },
  weatherInfoText: {
    flex: 1, 
    fontSize: 15, 
    fontFamily: "sans-serif-medium", 
    color: "white"
  }
});

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