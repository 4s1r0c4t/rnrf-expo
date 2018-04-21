import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Header, Body, Button, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

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

export default class Settings extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
            <Title>Settings scene</Title>
          </Body>
        </Header>
        <Content>
          <Button transparent onPress={() => Actions.videos({lang: "en-CA"})}>
            <Text>Videos in English</Text>
          </Button>
          <Button transparent onPress={() => Actions.videos({lang: "fr-CA"})}>
            <Text>Vidéos en Français</Text>
          </Button>
          <Button transparent onPress={() => Actions.videos({lang: "pt-BR"})}>
            <Text>Vídeos em Português</Text>
          </Button>
          <Button rounded dark style={styles.button} onPress={Actions.pop}>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
