import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import Weather from './src/Weather.js'

export default function App() {
  return (
    <View style={{flex:1,}}>
      <ImageBackground source = {require('./src/gradientbackground.jpg')} resizeMode="cover" style = {{flex:1}}>
          <Weather/>
          <StatusBar hidden />
      </ImageBackground>
    </View>
  );
}
