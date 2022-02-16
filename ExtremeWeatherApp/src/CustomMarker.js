import React from 'react';
import { StyleSheet, Image } from 'react-native';

class CustomMarker extends React.Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={
          this.props.pressed ? require('./download.png') : require('./danger.jpg')
        }
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
});

export default CustomMarker;