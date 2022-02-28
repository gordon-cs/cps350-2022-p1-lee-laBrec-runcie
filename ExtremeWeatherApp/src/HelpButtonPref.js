import { React, Component } from 'react';
import { Image, Pressable, View, Alert } from 'react-native';

/* HelpButtonPref class - no Props need to be provided*/
export default class HelpButtonPref extends Component {
  render() {
    const helpText = 
    "Balance/change your Preferences";
    const settingText = ("This is the page where you can balance and change your preferences."+
    "\nMoving any slider towards the right side means you care more about this variable."+
    "\n\nDon't forget to save even if you don't change anything!\n\n"+
    "Eg. Moving the temperature slider towards the right side means you care more about"+
    " dangerous temperatures.") 
    return (
      <View style={{flex: 1,}}>
        <Pressable onPress={() => Alert.alert(
          helpText,
          settingText,
        )}>
          <Image
            source={require('./assets/helpicon.png')}
            style={{
              resizeMode: "cover",
              height: 32,
              width: 32,
            }}
          />
        </Pressable>
      </View>
    );
  }
}
