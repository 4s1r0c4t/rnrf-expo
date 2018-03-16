import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class Settings extends React.Component {
  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    console.info('Sign-up Rendered');
    return <View style={styles.container}>
      <Text>Language Settings</Text>
      <Button onPress={() => Actions.videos({lang: "pt-BR"})}>Portuguese</Button>
      <Button onPress={() => Actions.videos({lang: "en-CA"})}>English</Button>
      <Button onPress={Actions.pop}>Back</Button>
    </View>
  }
}
