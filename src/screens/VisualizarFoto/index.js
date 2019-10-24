import React, {Component} from 'react';
import {Image} from 'react-native';
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
} from './styles';

export default class VisualizarFoto extends Component {
  componentDidMount() {
    alert();
  }
  render() {
    const imageUri = this.props.navigation.getParam('imageUri');
    console.log(imageUri);
    return (
      <Container>
        <Header style={{backgroundColor: '#1d1d1d', border: 0}}>
          <Left style={{flexDirection: 'row', alignItems: 'center'}}>
            <Button transparent>
              <Icon style={{color: colors.white}} name="ios-arrow-round-back" />
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
              <Icon style={{color: colors.white}} name="edit" type="Entypo" />
            </Button>
          </Right>
        </Header>
        <ImageContainer></ImageContainer>
        <SentAreaContainer>
          <AddNewImageContainer>
            <Icon style={{color: colors.white, marngin: 20}} name="ios-image" />
            <Separator />
            <AddDescription placeholder="Adicione uma legenda..." />
          </AddNewImageContainer>
          <SentButton>
            <Icon style={{color: colors.white}} name="send" />
          </SentButton>
        </SentAreaContainer>
      </Container>
    );
  }
}
