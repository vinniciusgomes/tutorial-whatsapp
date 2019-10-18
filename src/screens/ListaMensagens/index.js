import React, {Component} from 'react';
import {Header, Left, Button, Icon, Right, Body, Title} from 'native-base';

import {
  Container,
  SearchBarContainer,
  SearchBar,
  EditButton,
  ChatsContainer,
  ChatRow,
  ChatPhoto,
  ChatText,
  ChatBottomBorder,
} from './styles';

export default class ListaMensagens extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <EditButton>Editar</EditButton>
            </Button>
          </Left>
          <Body>
            <Title>Conversas</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <SearchBarContainer>
          <SearchBar placeholder="Buscar"></SearchBar>
        </SearchBarContainer>
        <ChatsContainer>
          <ChatRow>
            <ChatPhoto />
            <ChatText>Teste</ChatText>
          </ChatRow>
          <ChatBottomBorder />
        </ChatsContainer>
      </Container>
    );
  }
}
