import React, {Component} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import {
  Container,
  Header,
  UserInfos,
  UserName,
  UserPhone,
  UserPhoto,
  ActionsButtons,
  ActionButton,
  CallEndContainer,
  CallEnd,
  HeaderText,
  ModalContainer,
  ModalTitle,
  ModalSubtitle,
  ModalButtonContainer,
  ModalImageContainer,
  ModalImage,
  Button,
  Text,
} from './styles';

import avatar from '~/assets/img/woman.jpeg';
import img1 from '~/assets/img/ligacao/step2.png';
import img2 from '~/assets/img/ligacao/step3.png';
import img3 from '~/assets/img/ligacao/step4.png';

export default class Ligacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: null,
    };
  }

  componentDidMount() {
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
            <Button onPress={() => this.props.navigation.navigate('Main')}>
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

  render() {
    return (
      <>
        <Container>
          <StatusBar barStyle="light-content" />
          <Header>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('IniciarLigacao')}>
              <Icon
                size={30}
                style={{marginLeft: -20}}
                color="white"
                name="navigate-before"
              />
            </TouchableOpacity>
            <HeaderText>LIGAÇÃO DE ÁUDIO DO WHATSAPP</HeaderText>
          </Header>
          <UserInfos>
            <UserName>Anna Laura</UserName>
            <UserPhone>ligando para +55 99 99999-9999...</UserPhone>
            <UserPhoto source={avatar} />
          </UserInfos>
          <ActionsButtons>
            <ActionButton
              onPress={() => this.setState({visibleModal: 'step3'})}>
              <Icon size={40} name="volume-up" />
            </ActionButton>
            <ActionButton
              onPress={() => this.setState({visibleModal: 'step4'})}>
              <Icon size={40} name="videocam" />
            </ActionButton>
            <ActionButton
              onPress={() => this.setState({visibleModal: 'step5'})}>
              <Icon size={40} name="mic-off" />
            </ActionButton>
          </ActionsButtons>
          <CallEndContainer>
            <CallEnd
              onPress={() => this.props.navigation.navigate('IniciarLigacao')}>
              <Icon size={40} color="white" name="call-end" />
            </CallEnd>
          </CallEndContainer>
        </Container>
        <Modal isVisible={this.state.visibleModal === 'step1'}>
          {this.renderModalContent(
            'Tela de ligação',
            'Quando estiver fazendo uma chamada, a tela ficará desse jeito.',
            '',
            'Continuar',
            '',
            'step2',
          )}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 'step2'}>
          {this.renderModalContent(
            'Alto falante',
            "Caso queira colocar a ligação em alto falante clique em cima de 'Alto falante'.",
            '',
            'Continuar',
            img1,
            'null',
          )}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 'step3'}>
          {this.renderModalContent(
            'Ligação por vídeo',
            "Caso queira mudar de áudio para vídeo, clique em cima de 'Ligação de vídeo'",
            '',
            'Continuar',
            img2,
            'null',
          )}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 'step4'}>
          {this.renderModalContent(
            'Silenciar ligação',
            "Caso queira silenciar a conversa, clique em cima de 'Silenciar'",
            '',
            'Continuar',
            img3,
            'null',
          )}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 'step5'}>
          {this.renderModalContent(
            'Parabéns',
            'Agora você já sabe como funciona uma ligação. Continue treinando ou volte para escolher novas funções.',
            'Voltar',
            'Continuar treinando',
            '',
            '',
          )}
        </Modal>
      </>
    );
  }
}
