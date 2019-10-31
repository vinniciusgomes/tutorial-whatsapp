import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StatusBar} from 'react-native';
import Modal from 'react-native-modal';
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
  ModalContainer,
  ModalTitle,
  ModalSubtitle,
  ModalButtonContainer,
  Button,
  Text,
} from './styles';
import colors from '~/assets/Colors';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: null,
    };
  }

  componentDidMount() {
    this.setState({visibleModal: 'step1'});
  }

  renderModalContent(title, subtitle, textButton1, textButton2) {
    return (
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        <ModalButtonContainer>
          {textButton1 !== '' ? (
            <Button onPress={() => this.setState({visibleModal: null})}>
              <Text>{textButton1}</Text>
            </Button>
          ) : null}
          <Button onPress={() => this.setState({visibleModal: null})}>
            <Text>{textButton2}</Text>
          </Button>
        </ModalButtonContainer>
      </ModalContainer>
    );
  }

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
        <Modal isVisible={this.state.visibleModal === 'step1'}>
          {this.renderModalContent(
            'O que você deseja fazer?',
            'Escolha uma das opções e aprenda como enviar mensagens, áudios e fotos a um amigo ou até mesmo realizar uma ligação.',
            '',
            'Vamos lá',
          )}
        </Modal>
      </Container>
    );
  }
}
