import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StatusBar, Platform} from 'react-native';
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
            <Option
              onPress={() => this.props.navigation.navigate('NovaConversa')}>
              <Icon name="comment" size={38} color="#fff" />
              <OptionTitle>Enviar{'\n'}Mensagem</OptionTitle>
            </Option>
            <Option
              onPress={() => this.props.navigation.navigate('EnvioAudio')}>
              <Icon name="microphone" size={38} color="#fff" />
              <OptionTitle>Enviar{'\n'}Áudio</OptionTitle>
            </Option>
          </OptionsContainer>
          <OptionsContainer>
            <Option onPress={() => this.props.navigation.navigate('EnvioFoto')}>
              <Icon name="camera" size={38} color="#fff" />
              <OptionTitle>Enviar{'\n'}Foto</OptionTitle>
            </Option>
            <Option onPress={() => this.props.navigation.navigate('Ligacao')}>
              <Icon name="phone" size={38} color="#fff" />
              <OptionTitle>Fazer uma{'\n'}Ligação</OptionTitle>
            </Option>
          </OptionsContainer>
        </Body>
      </Container>
    );
  }
}
