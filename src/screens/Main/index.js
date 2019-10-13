import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  Title,
  Body,
  BodyTitleContainer,
  BodyTitle,
  OptionsContainer,
  Option,
  OptionTitle,
} from './styles';
import colors from '~/assets/Colors';

export default class index extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.teal} />
        <Header>
          <Icon name="book" size={22} color="#fff" />
          <Title>Protótipo - App</Title>
        </Header>
        <Body>
          <BodyTitleContainer>
            <BodyTitle>O que você deseja fazer?</BodyTitle>
          </BodyTitleContainer>
          <OptionsContainer>
            <Option>
              <Icon name="comment" size={38} color="#fff" />
              <OptionTitle>Enviar Mensagem</OptionTitle>
            </Option>
            <Option>
              <Icon name="microphone" size={38} color="#fff" />
              <OptionTitle>Enviar Áudio</OptionTitle>
            </Option>
            <Option>
              <Icon name="camera" size={38} color="#fff" />
              <OptionTitle>Enviar Foto</OptionTitle>
            </Option>
            <Option>
              <Icon name="phone" size={38} color="#fff" />
              <OptionTitle>Ligar</OptionTitle>
            </Option>
          </OptionsContainer>
        </Body>
      </Container>
    );
  }
}
