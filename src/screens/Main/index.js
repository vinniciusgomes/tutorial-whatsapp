import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StatusBar, ToastAndroid, ActivityIndicator} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Modal from 'react-native-modal';
import axios from 'axios';
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
  LoadingContainer,
  Text,
} from './styles';
import colors from '~/assets/Colors';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: null,
      loading: true,
      responseTitle: '',
      responseMessage: '',
      responseContact: '',
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectionChange.bind(this),
    );
    NetInfo.isConnected.fetch().done(isConnected => {
      this.setState({isConnected: isConnected});
    });
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectionChange,
    );
  }

  handleConnectionChange = isConnected => {
    if (isConnected) {
      this.verifyApp('vWYBkBekY5');
    } else {
      this.setState({visibleModal: 'offline', loading: false});
      ToastAndroid.show('Você está offline.', ToastAndroid.LONG);
    }
    this.setState({isConnected: isConnected});
  };

  verifyApp = appKey => {
    const header = {
      'Content-Type': 'application/json',
    };
    const parameters = {
      method: 'POST',
      headers: header,
    };
    const body = {
      appKey: appKey,
    };
    axios
      .post('https://api.vife.dev/verify-app/v1/verify', body, parameters)
      .then(res => {
        const response = res.data;
        if (response.isBlocked) {
          this.setState({
            visibleModal: 'blocked',
            responseTitle: response.title,
            responseMessage: response.message,
            responseContact: response.contact,
            loading: false,
          });
          this.renderModalBlockContent();
        } else {
          this.setState({visibleModal: 'step1', loading: false});
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderModalBlockContent() {
    return (
      <ModalContainer>
        <ModalTitle>{this.state.responseTitle}</ModalTitle>
        <ModalSubtitle>{this.state.responseMessage}</ModalSubtitle>
        <ModalSubtitle>
          Entre em contato com: {this.state.responseContact}
        </ModalSubtitle>
      </ModalContainer>
    );
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
          {textButton2 !== '' ? (
            <Button onPress={() => this.setState({visibleModal: null})}>
              <Text>{textButton2}</Text>
            </Button>
          ) : null}
        </ModalButtonContainer>
      </ModalContainer>
    );
  }

  render() {
    return (
      <Container>
        {this.state.loading ? (
          <LoadingContainer>
            <ActivityIndicator size="large" color="#128c7e" />
          </LoadingContainer>
        ) : (
          <>
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
                  onPress={() =>
                    this.props.navigation.navigate('NovaConversa')
                  }>
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
                <Option
                  onPress={() => this.props.navigation.navigate('EnvioFoto')}>
                  <Icon name="camera" size={38} color="#fff" />
                  <OptionTitle>Enviar{'\n'}Foto</OptionTitle>
                </Option>
                <Option
                  onPress={() =>
                    this.props.navigation.navigate('IniciaLigacao')
                  }>
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
            <Modal isVisible={this.state.visibleModal === 'offline'}>
              {this.renderModalContent(
                'Você está desconectado',
                'Para utilizar o aplicativo você precisa estar conectado á internet. Feche o aplicativo e tente conectar novamente',
                '',
                '',
              )}
            </Modal>
            <Modal isVisible={this.state.visibleModal === 'blocked'}>
              {this.renderModalBlockContent()}
            </Modal>
          </>
        )}
      </Container>
    );
  }
}
