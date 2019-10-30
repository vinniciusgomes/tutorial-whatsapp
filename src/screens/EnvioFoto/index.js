import React, {Component} from 'react';
import {StatusBar, View, Text, Button, StyleSheet} from 'react-native';
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
} from './styles';
import Header from '~/components/Header';
import SentArea from '~/components/SentArea';
import Message from '~/components/Message';

export default class EnvioFoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      visibleModal: null,
    };
  }

  renderModalContent = (title, subtitle, textButton1, textButton2) => (
    <ModalContainer>
      <ModalTitle>{title}</ModalTitle>
      <ModalSubtitle>{subtitle}</ModalSubtitle>
      <ModalImageContainer>
        <ModalImage source={require('~/assets/img/teste1.png')} />
      </ModalImageContainer>
      <ModalButtonContainer>
        <Button
          onPress={() => this.setState({visibleModal: null})}
          title={textButton1}
        />
        <Button
          onPress={() => this.setState({visibleModal: null})}
          title={textButton2}
        />
      </ModalButtonContainer>
    </ModalContainer>
  );

  componentDidMount() {
    const imageUri = this.props.navigation.getParam('imageUri');
    if (imageUri) {
      this.setState({imageUri});
      this.sent(imageUri, 'image');
    }
    this.setState({visibleModal: 'step1'});
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
                />
              );
            })}
          </ChatArea>
          <SentArea
            onPress={() => this.props.navigation.navigate('Camera')}
            sent={this.sent}
          />
          <Modal isVisible={this.state.visibleModal === 'step1'}>
            {this.renderModalContent('Step 1', 'Teste', 'Close', 'Continuar')}
          </Modal>
        </Body>
      </Container>
    );
  }
}
