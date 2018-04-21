import React from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, Text, Header, Body, Button, Title, Card, CardItem } from 'native-base';
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange"
  },
  header: {
    backgroundColor: 'black'
  },
  button: {
    alignSelf: 'center'
  }
});

export default class Videos extends React.Component {
  render() {
    const settingsTitle = (this.props.lang == 'pt-BR') ? 'Configurações' : 'Settings';
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
              <Title>Videos Scene</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  This is the Videos scene with two buttons to either go to settings, or return to the Home scene.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button transparent onPress={Actions.settings}>
              <Text>{settingsTitle}</Text>
          </Button>
          <Button rounded dark style={styles.button} onPress={Actions.pop}>
              <Text>Return to Home Scene</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
