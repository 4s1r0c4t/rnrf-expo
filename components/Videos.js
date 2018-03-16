import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default class Videos extends React.Component {
  render() {
    const settingsTitle = (this.props.lang == 'pt-BR') ? 'Configurações' : 'Settings';
    return (
      <View style={[styles.container, this.props.style]}>
        <Text>Videos</Text>
        <Button onPress={Actions.settings}>{settingsTitle}</Button>
        <Button onPress={Actions.pop}>Back</Button>
      </View>
    );
  }
}
