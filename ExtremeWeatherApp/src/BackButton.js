import { React, Component } from 'react';
import { Image, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* BackButton class - no Props need to be provided*/
class BackButton extends Component {
  render() {
      const { navigation } = this.props;
    return (
    <View style={{flex: 0.3, paddingLeft:15}}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('./assets/settingsicon.png')}
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

  return <BackButton {...props} navigation={navigation} />;
} 