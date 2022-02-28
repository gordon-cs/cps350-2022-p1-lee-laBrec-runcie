import { React, Component } from 'react';
import { Image, Pressable, View, Alert } from 'react-native';

/* HelpButton class - no Props need to be provided*/
export default class HelpButton extends Component {
  render() {
    const helpText = 
    "Welcome to XTRM WFR!";
    const settingText = ("Start by clicking on the settings icon in the top right!\n"+
    "After changing your preferences and saving, click the refresh button right next"+
    " to this icon.\nThis will activate the danger dial with a personalized score carefully "+
    "calculated according to the current weather and your preferences.")
    return (
      <View style={{flex: 1.5, paddingLeft:5}}>
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
