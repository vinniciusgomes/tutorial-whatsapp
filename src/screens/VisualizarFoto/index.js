import React, {Component} from 'react';
import {Header, Left, Button, Icon, Right, Body} from 'native-base';

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
} from './styles';

export default class VisualizarFoto extends Component {
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
                <Button transparent>
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
      </Container>
    );
  }
}
