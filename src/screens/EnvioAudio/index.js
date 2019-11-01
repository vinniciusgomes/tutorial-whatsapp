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

import img1 from '~/assets/img/audio/step1.png';
import img2 from '~/assets/img/audio/step2.png';
import img3 from '~/assets/img/audio/step3.png';

export default class EnvioAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      visibleModal: null,
      reproduzido: false,
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

  modalFinal2() {
    if (this.state.visibleModal == 'none') {
      return this.setState({visibleModal: 'step4'});
    }
  }

  escutar = () => {
    this.setState({reproduzido: true});
    console.log('escutou');
  };

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
        <Header name="Mina do Google" avatar={this.avatar} />
        <Body>
          <ChatArea>
            {this.state.messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  content={message.content}
                  type={message.type}
                  avatar={this.avatar}
                  escutar={this.escutar}
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
            'Grave um áudio',
            'Toque no botão de gravação, como na imagem abaixo, e comece a gravar um áudio para seu amigo.',
            '',
            'Continuar',
            img1,
            'step2',
          )}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 'step2'}>
          {this.renderModalContent(
            'Envie seu áudio',
            'Após falar o que deseja, clique no botão de enviar para que seu amigo receba seu áudio.',
            '',
            'Vamos lá',
            img2,
            null,
          )}
        </Modal>
        {this.state.messages.length == 1 ? this.modalFinal() : null}
        <Modal isVisible={this.state.visibleModal === 'step3'}>
          {this.renderModalContent(
            'Escutando seu áudio',
            'Depois de ter enviado seu áudio você pode ouvi-lo tocando no botão de reprodução conforme a imagem abaixo.',
            '',
            'Escutar áudio',
            img3,
            'none',
          )}
        </Modal>
        {this.state.reproduzido ? this.modalFinal2() : null}
        <Modal isVisible={this.state.visibleModal === 'step4'}>
          {this.renderModalContent(
            'Parabéns',
            'Agora você ja sabe enviar um áudio para seus amigos e reproduzi-lo. Continue treinando ou volte para escolher novas funções.',
            'Voltar',
            'Continuar treinando',
            '',
            '',
          )}
        </Modal>
      </Container>
    );
  }
}
