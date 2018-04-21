import React from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, Text, Header, Body, Button, Title } from 'native-base';
import {Actions} from "react-native-router-flux";

var styles = StyleSheet.create({
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

class Home extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Title>Home Scene</Title>
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
                </Content>
            </Container>
        );
    }
}

module.exports = Home;
