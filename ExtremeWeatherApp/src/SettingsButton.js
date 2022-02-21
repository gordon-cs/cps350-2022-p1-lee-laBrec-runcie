import { React, Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

/* SettingsButton class - no Props needed*/
class SettingsButton extends Component {
  render() {
    return (
      <Button
        title="Settings"
        onPress={() => this.props.navigation.navigate('Settings')}
      />
    );
  }
}

// withNavigation returns a component that wraps WeatherNow and passes in the
// navigation prop
export default withNavigation(SettingsButton);