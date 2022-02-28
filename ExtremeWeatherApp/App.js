import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from './src/Weather.js';
import SettingState from './src/SettingState.js';
import 'localstorage-polyfill';


function HomeScreen( {navigation} ) {
  return (
    <View style={{flex:1,}}>
        <ImageBackground source = {require('./src/assets/gradientbackground.jpg')} 
          resizeMode="cover" 
          style = {{flex:1}}>
        <Weather />
        <StatusBar hidden />
        </ImageBackground>
    </View>
  )
}

function SettingsScreen( {navigation} ) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>      
      <ImageBackground source = {require('./src/assets/gradientbackground.jpg')} 
          resizeMode="cover" 
          style = {{flex:1}}>
          <SettingState />
      </ImageBackground>
    </View>
  )
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
          component={HomeScreen} 
          options={{headerShown: false}} />
        <Stack.Screen name="Settings" 
          component={SettingsScreen} 
          options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;