import { React, Component } from 'react';
import { Image, Pressable, View } from 'react-native';

/* HelpButton class - no Props need to be provided*/
export default class HelpButton extends Component {
  render() {
    return (
      <View style={{flex: 1.5, paddingLeft:5}}>
        <Pressable onPress={() => navigation.navigate('Settings')}>
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
