import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Weather from './src/Weather.js'

export default function App() {
  return (
    <View style={{height:10000, backgroundColor: "#ffa634"}}>
      <ScrollView>
        <Weather/>
        <StatusBar hidden />
      </ScrollView>
    </View>
  );
}
