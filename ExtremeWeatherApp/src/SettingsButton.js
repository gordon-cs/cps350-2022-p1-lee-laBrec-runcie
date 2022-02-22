import { React, Component } from 'react';
import { Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* SettingsButton class - no Props need to be provided*/
class SettingsButton extends Component {
  render() {
      const { navigation } = this.props;
    return (
    <Pressable onPress={() => navigation.navigate('Settings')}>
      <Image
        source={require('./SettingsIcon.png')}
        style={{
          resizeMode: "cover",
          height: 50,
          width: 50,
        }}
      />
    </Pressable>
    );
  }
}

// Wrap and export
export default function(props) {
  const navigation = useNavigation();

  return <SettingsButton {...props} navigation={navigation} />;
} 