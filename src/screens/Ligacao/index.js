import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
} from './styles';

export default class Ligacao extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header>
          <Icon size={30} style={{marginLeft: -20}} color="white" name="navigate-before" />
          <HeaderText>LIGAÇÃO DE ÁUDIO DO WHATSAPP</HeaderText>
        </Header>
        <UserInfos>
          <UserName>Vinnicius Gomes</UserName>
          <UserPhone>ligando para +55 12 99205-0829...</UserPhone>
          <UserPhoto />
        </UserInfos>
        <ActionsButtons>
          <ActionButton>
            <Icon size={40} name="volume-up" />
          </ActionButton>
          <ActionButton>
            <Icon size={40} name="videocam" />
          </ActionButton>
          <ActionButton>
            <Icon size={40} name="mic-off" />
          </ActionButton>
        </ActionsButtons>
        <CallEndContainer>
          <CallEnd>
            <Icon size={40} color="white" name="call-end" />
          </CallEnd>
        </CallEndContainer>
      </Container>
    );
  }
}
