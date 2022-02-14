import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Weather from './src/Weather.js'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Weather/>
      <StatusBar hidden />
    </View>
  );
}
