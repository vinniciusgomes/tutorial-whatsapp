import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import {
  Container,
  Body,
  ChatArea,
  ModalContainer,
  ModalTitle,
  ModalSubtitle,
  ModalButtonContainer,
  ModalImageContainer,
  ModalImage,
  Button,
  Text,
} from './styles';
import Header from '~/components/Header';
import SentArea from '~/components/SentArea';
import Message from '~/components/Message';

import img1 from '~/assets/img/ligacao/step1.png';

export default class IniciarLigacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      visibleModal: null,
    };
  }

  componentDidMount() {
    const imageUri = this.props.navigation.getParam('imageUri');
    if (imageUri) {
      this.setState({imageUri});
      this.sent(imageUri, 'image');
    }
    this.setState({visibleModal: 'step1'});
  }

  renderModalContent(title, subtitle, textButton1, textButton2, source, next) {
    return (
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        {source ? (
          <ModalImageContainer>
            <ModalImage source={source} />
          </ModalImageContainer>
        ) : null}
        <ModalButtonContainer>
          {textButton1 !== '' ? (
            <Button onPress={() => this.setState({visibleModal: null})}>
              <Text>{textButton1}</Text>
            </Button>
          ) : null}
          <Button onPress={() => this.setState({visibleModal: next})}>
            <Text>{textButton2}</Text>
          </Button>
        </ModalButtonContainer>
      </ModalContainer>
    );
  }

  modalFinal() {
    if (this.state.visibleModal == null) {
      return this.setState({visibleModal: 'step3'});
    }
  }

  sent = (content, type) => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          content: content.trim(),
          type: type,
        },
      ],
    });
  };

  avatar = require('~/assets/img/woman.jpeg');
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#054a42" />
        <Header
          onPress={() => this.props.navigation.navigate('Main')}
          name="Anna Laura"
          avatar={this.avatar}
          navigate={() => this.props.navigation.navigate('Ligacao')}
        />
        <Body>
          <ChatArea>
            {this.state.messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  content={message.content}
                  type={message.type}
                  avatar={this.avatar}
                />
              );
            })}
          </ChatArea>
          <SentArea
            onPress={() => this.props.navigation.navigate('Camera')}
            sent={this.sent}
          />
        </Body>
        <Modal isVisible={this.state.visibleModal === 'step1'}>
          {this.renderModalContent(
            'Iniciar ligação',
            'Clique em cima do botão do telefone, como na imagem abaixo, para fazer uma ligação para seu amigo.',
            '',
            'Continuar',
            img1,
            'null',
          )}
        </Modal>
        {this.state.messages.length == 1 ? this.modalFinal() : null}
        <Modal isVisible={this.state.visibleModal === 'step3'}>
          {this.renderModalContent(
            'Parabéns',
            'Agora você ja sabe enviar mensagens para seus amigos. Continue treinando ou volte para escolher novas funções.',
            'Voltar',
            'Continuar treinando',
            '',
            'none',
          )}
        </Modal>
      </Container>
    );
  }
}
