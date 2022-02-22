import { React, Component } from 'react';
import { Image, Pressable } from 'react-native';

/* RefreshButton class - no Props need to be provided*/
export default class RefreshButton extends Component {
  render() {
    return (
    <Pressable onPress={this.forceUpdate}>
      <Image
        source={require('./RefreshIcon.png')}
        style={{
          resizeMode: "cover",
          height: 48,
          width: 48,
        }}
      />
    </Pressable>
    );
  }
}