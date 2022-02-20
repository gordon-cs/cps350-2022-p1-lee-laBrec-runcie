import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from './src/Weather.js';

function HomeScreen( {navigation} ) {
  return (
    <View style={{flex:1,}}>
        <ImageBackground source = {require('./src/gradientbackground.jpg')} 
          resizeMode="cover" 
          style = {{flex:1}}>
        <Weather/>
        <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
        />
        <StatusBar hidden />
        </ImageBackground>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      
      <ImageBackground source = {require('./src/gradientbackground.jpg')} 
          resizeMode="cover" 
          style = {{flex:1}}>
          <Text>Details Screen</Text>
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