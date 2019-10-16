import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  UserInfos,
  UserName,
  UserPhone,
  UserPhoto,
  ActionsButtons,
  ActionButton,
  HangUpContainer,
  HangUp,
} from './styles';

export default class Ligacao extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header></Header>
        <UserInfos>
          <UserName>Vinnicius Gomes</UserName>
          <UserPhone>ligando para +55 12 99205-0829...</UserPhone>
          <UserPhoto />
        </UserInfos>
        <ActionsButtons>
          <ActionButton />
          <ActionButton />
          <ActionButton />
        </ActionsButtons>
        <HangUpContainer>
          <HangUp />
        </HangUpContainer>
      </Container>
    );
  }
}
