import React from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import Videos from './components/Videos';
import Settings from './components/Settings';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Router>
        <Stack key="root">
          <Scene key="home" component={Home}/>
          <Scene key="videos" component={Videos}/>
          <Scene key="settings" component={Settings}/>
        </Stack>
      </Router>
      );
    }
  }

  async _loadResourcesAsync() {
    return Promise.all([
      Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

