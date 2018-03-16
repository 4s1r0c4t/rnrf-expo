import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux';
import Home from './components/Home';
import Videos from './components/Videos';
import Settings from './components/Settings';

export default class App extends React.Component {
  render() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
