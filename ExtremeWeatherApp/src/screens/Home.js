// Home.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Weather from './src/Weather.js'

export default class HomeScreen extends Component {
  render() {
    return (
        <View style={{flex:1,}}>
            <ImageBackground source = {require('./src/gradientbackground.jpg')} resizeMode="cover" style = {{flex:1}}>
            <Weather/>
            <StatusBar hidden />
            </ImageBackground>
        </View>
    )
  }
}