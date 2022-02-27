import React from 'react';
import { StyleSheet, Image } from 'react-native';

class WindMarker extends React.Component {
  render() {
    return (
      <Image
        style = {styles.image}
        source = {
          this.props.pressed ? require('./assets/XTRMWFR.png') : require('./assets/Wind.png')
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

export default WindMarker;