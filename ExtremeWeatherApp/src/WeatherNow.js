import { React, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import SettingsButton from './SettingsButton';
import Recommendations from './Recommendations';
import RefreshButton from './RefreshButton';

export default class WeatherNow extends Component {
  update = () => {
    // calling the forceUpdate() method
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
    }
    return (
      <View style={{ flex: 1, flexDirection: "column"}}>
        <View style={{paddingTop: 15, flexDirection: 'row', justifyContent: "space-between"}}>
          <RefreshButton />
          <SettingsButton />
        </View>
        <View style={{paddingBottom: 75}}>
          <Title />
        </View>
        <CatchPhrase />
        <SubTitle isLoading={this.props.isLoading}
                  weatherData={this.props.weatherData} />
        <Dial dangerLevel={this.props.dangerLevel}/>
        <WeatherInfo isLoading={this.props.isLoading}
                    weatherData={this.props.weatherData} />
        <View style={{padding: "2%"}}>
          <View style ={{paddingRight: 300,}}>
            <Button 
                style ={{alignItems: "center",}}
                title="SAVE"
                color={"pink"}
                onPress={this.update}
              />
          </View>
          <Recommendations dangerLevel={dangerValue} />
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
              flex: 1,
              alignItems: "center",
            }}>
        <Image source = {require('./XTRMWFR.png')}/>
      </View>
    );
  }
}

/* CatchPhrase class - no Props needed*/
class CatchPhrase extends Component {
  render() {
    return (
        <View style = {{
                flex: 1,
                alignItems: "center",
              }}>
        <Image source = {require("./itsDangerousOutThere.png")}/>
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
    let location;
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
              flex: 6,
              alignItems: "center",
            }}>
        <SafeAreaView>
          <TextInput placeholder="Danger Level" textAlign='center'/>
          <RNSpeedometer value={dangerValue} // Make dynamic 
            labels={dialLabels} 
            innerCircleStyle={{backgroundColor: "transparent"}}/>
        </SafeAreaView>
        <View style ={{paddingRight: 300,}}>
          <Button 
              style ={{alignItems: "center",}}
              title="SAVE"
              color={"pink"}
              onPress={this.update}
            />
          </View>
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
              flex:2,
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

          {/* Wind */}
          <View style= {styles.columnflex}>
            {/* Icon */}
            <Image style = {styles.image}
                  source={require('./Wind.png')}/>
            <Text style={{flex: 1,}}>
              {/* Data */}
              {Wind} MPH
            </Text>
            <Text style = {{flex: 1,}}>
              Wind
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