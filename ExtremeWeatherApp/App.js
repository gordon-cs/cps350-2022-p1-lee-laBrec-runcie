// import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Weather froms './src/Weather.js'; // Think I can remove
//import HomeScreen from './src/screens/Home.js';
// import SettingsScreen from './src/screens/Settings.js';


// function HomeScreen() {
//   return (
//     <View >
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from './src/Weather.js';
// import HomeScreen from './src/screens/Home.js';

function HomeScreen() {
  return (
    <View style={{flex:1,}}>
        <ImageBackground source = {require('./src/gradientbackground.jpg')} resizeMode="cover" style = {{flex:1}}>
        <Weather/>
        <StatusBar hidden />
        </ImageBackground>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;