import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Weather from './src/Weather.js'; // Think I can remove
import Homescreem from './scr/screens/Home.js';
import Settingsscreen from './scr/screens/Settings.js';


export default function App() {
  return <AppContainer />;
  // return (
    // <NavigationContainer>
    //   <Stack.Navigator>

    //   </Stack.Navigator>
    // </NavigationContainer>
  // );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Homescreem
 },
 Settings: {
  screen: Settingsscreen
  }
});

const AppContainer = createAppContainer(AppNavigator);


// https://blog.logrocket.com/navigating-react-native-apps-using-react-navigation/


// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };