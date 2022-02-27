import { React, Component } from 'react';
import { Image, Pressable, View, Alert } from 'react-native';

/* HelpButton class - no Props need to be provided*/
export default class HelpButton extends Component {
  render() {
    const helpText = 
    "Danger score below based off of current weather conditions.";
    const settingText = "Change location and proportion each \
weather factor contributes to your score in the settings menu. \
Press reload button after changing settings." 
    return (
      <View style={{flex: 1.5, paddingLeft:5}}>
        <Pressable onPress={() => Alert.alert(
          helpText,
          settingText,
        )}>
          <Image
            source={require('./helpicon.png')}
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
