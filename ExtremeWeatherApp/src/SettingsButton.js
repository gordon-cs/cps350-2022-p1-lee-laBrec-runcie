import { React, Component } from 'react';
import { Image, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* SettingsButton class - no Props need to be provided*/
class SettingsButton extends Component {
  render() {
      const { navigation } = this.props;
    return (
    <View style={{flex: 1.5, paddingLeft:5}}>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Image
          source={require('./settingsicon.png')}
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

// Wrap and export
export default function(props) {
  const navigation = useNavigation();

  return <SettingsButton {...props} navigation={navigation} />;
} 