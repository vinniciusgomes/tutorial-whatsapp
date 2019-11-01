import React, {Component} from 'react';
import {Header, Left, Button, Icon, Right, Body} from 'native-base';
import Modal from 'react-native-modal';
import colors from '~/assets/Colors';
import {
  Container,
  ImageContainer,
  UserPhoto,
  SentAreaContainer,
  SentButton,
  AddNewImageContainer,
  AddDescription,
  Separator,
  Image,
  ModalContainer,
  ModalTitle,
  ModalSubtitle,
  ModalButtonContainer,
  ModalImageContainer,
  ModalImage,
  ModalButton,
  Text,
} from './styles';

import img1 from '~/assets/img/foto/step2.png';
import img2 from '~/assets/img/foto/step3.png';

export default class VisualizarFoto extends Component {
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
            <ModalButton onPress={() => this.setState({visibleModal: null})}>
              <Text>{textButton1}</Text>
            </ModalButton>
          ) : null}
          <ModalButton onPress={() => this.setState({visibleModal: next})}>
            <Text>{textButton2}</Text>
          </ModalButton>
        </ModalButtonContainer>
      </ModalContainer>
    );
  }

  render() {
    const imageUri = this.props.navigation.getParam('imageUri');
    return (
      <Container>
        <ImageContainer>
          <Image source={{uri: `data:image/jpg;base64,${imageUri}`}}>
            <Header
              noShadow
              androidStatusBarColor="#000000"
              style={{backgroundColor: 'transparent', border: 0}}>
              <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                <Button transparent onPress={() => this.props.navigation.navigate('EnvioFoto')}>
                  <Icon
                    style={{color: colors.white}}
                    name="ios-arrow-round-back"
                  />
                </Button>
                <UserPhoto />
              </Left>
              <Body />
              <Right>
                <Button transparent>
                  <Icon
                    style={{color: colors.white, marginRight: 20}}
                    name="crop"
                    type="Entypo"
                  />
                  <Icon
                    style={{color: colors.white, marginRight: 20}}
                    name="emoji-happy"
                    type="Entypo"
                  />
                  <Icon
                    style={{color: colors.white, marginRight: 20}}
                    name="Font"
                    type="Fontisto"
                  />
                  <Icon
                    style={{color: colors.white}}
                    name="edit"
                    type="Entypo"
                  />
                </Button>
              </Right>
            </Header>
            <SentAreaContainer>
              <AddNewImageContainer>
                <Icon
                  style={{color: colors.white, marngin: 20}}
                  name="ios-image"
                />
                <Separator />
                <AddDescription
                  placeholderTextColor={colors.white}
                  placeholder="Adicione uma legenda..."
                />
              </AddNewImageContainer>
              <SentButton
                onPress={() =>
                  this.props.navigation.navigate('EnvioFoto', {
                    imageUri: imageUri,
                  })
                }>
                <Icon style={{color: colors.white, fontSize: 35}} name="send" />
              </SentButton>
            </SentAreaContainer>
          </Image>
        </ImageContainer>
        <Modal isVisible={this.state.visibleModal === 'step1'}>
          {this.renderModalContent(
            'Visualizando sua foto',
            'Nesta tela você poderá ver a foto tirada antes de enviar a seu amigo.',
            '',
            'Continuar',
            null,
            'step2',
          )}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 'step2'}>
          {this.renderModalContent(
            'Adicionando legenda',
            'Adicione uma legenda a sua imagem clicando em "Adicionar legenda", como na imagem abaixo. Assim seu amigo saberá do que se trata a imagem.',
            '',
            'Continuar',
            img1,
            'step3',
          )}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 'step3'}>
          {this.renderModalContent(
            'Enviando sua foto',
            'Após adicionar legenda clique no botão de envio, como na imagem abaixo, para enviar a foto para seu amigo.',
            '',
            'Vamos lá',
            img2,
            null,
          )}
        </Modal>
      </Container>
    );
  }
}
