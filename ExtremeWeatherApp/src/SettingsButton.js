import { React, Component } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* SettingsButton class - no Props need to be provided*/
class SettingsButton extends Component {
  render() {
      const { navigation } = this.props;
    return (
      <Button
        title="Settings"
        onPress={() => this.props.navigation.navigate('Settings')}
      />
    );
  }
}

// Wrap and export
export default function(props) {
  const navigation = useNavigation();

  return <SettingsButton {...props} navigation={navigation} />;
} 