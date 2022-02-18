import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from './src/Weather.js'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <View style={{flex:1,}}>
          <ImageBackground source = {require('./src/gradientbackground.jpg')} resizeMode="cover" style = {{flex:1}}>
            <Weather/>
            <StatusBar hidden />
          </ImageBackground>
        </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};