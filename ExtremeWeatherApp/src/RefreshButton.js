import { React, Component } from 'react';
import { Image, Pressable, View } from 'react-native';


/* RefreshButton class - no Props need to be provided*/
export default class RefreshButton extends Component {
  render() {
    return (
      <View style={{flex: 1.5, }}>
        <Pressable /* onPress={() => } */>
          <Image
            source={require('./refreshicon.png')}
            style={{
              resizeMode: "cover",
              height: 30,
              width: 30,
            }}
          />
        </Pressable>
      </View>
    );
  }
}