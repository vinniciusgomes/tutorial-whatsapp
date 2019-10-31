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

export default class EnvioMensagem extends Component {
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
        {source !== '' ? (
          <ModalImageContainer>
            <ModalImage source='' />
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
    if(this.state.visibleModal == null){
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

  escutar = () => {
    this.setState({reproduzido: true});
    console.clear();
    console.log('escutou');
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
                  escutar={() => this.escutar()}
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
            'Escreva sua mensagem',
            'Clique em cima do espaço em branco, como na imagem abaixo, para aparecer o teclado e comece a digitar. Toque em continuar para prosseguir.',
            '',
            'Continuar',
            '~/assets/img/teste1.png',
            'step2',
          )}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 'step2'}>
          {this.renderModalContent(
            'Envie sua mensagem',
            'Após digitar a mensagem clique no botão de enviar para que seu amigo a receba.',
            '',
            'Vamos lá',
            '~/assets/img/teste1.png',
            null,
          )}
        </Modal>
        {this.state.messages.length == 1 ? this.modalFinal() : null}
        <Modal isVisible={this.state.visibleModal === 'step3'}>
          {this.renderModalContent(
            'Parabéns',
            'Agora você ja sabe enviar um áudio para seus amigos. Continue treinando ou volte para escolher novas funções.',
            'Voltar',
            'Continuar treinando',
            '',
            'none',
          )}
        </Modal>
        {this.state.reproduzido ? this.modalFinal() : null}
        <Modal isVisible={this.state.visibleModal === 'step3'}>
          {this.renderModalContent(
            'Parabéns',
            'Agora você ja sabe enviar um áudio para seus amigos. Continue treinando ou volte para escolher novas funções.',
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
