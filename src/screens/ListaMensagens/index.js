import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Header, Left, Button, Icon, Right, Body, Title} from 'native-base';

import {
  Container,
  ChatsContainer,
  HeaderText,
  Row,
  ChatPhoto,
  ChatTime,
  ChatRow,
  ChatBottomBorder,
  ChatMessage,
  UserName,
  Message,
  Hr,
} from './styles';

export default class ListaMensagens extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#054c44" />
        <Header style={{backgroundColor: '#075e55'}}>
          <Left>
            <HeaderText>WhatsApp</HeaderText>
          </Left>
          <Body />
          <Right>
            <Icon style={{color: '#FFFFFF', marginRight: 20}} name="ios-search" />
            <Icon style={{color: '#FFFFFF', marginRight: 10}} name="md-more" />
          </Right>
        </Header>
        <ChatsContainer>
          <Row>
            <ChatPhoto />
            <ChatRow>
              <ChatMessage>
                <UserName>Vinnicius Gomes</UserName>
                <Message>
                  <Icon
                    style={{color: '#c4c4c6', fontSize: 15}}
                    name="md-done-all"
                  />{' '}
                  Teste
                </Message>
              </ChatMessage>
              <ChatTime>10:30</ChatTime>
            </ChatRow>
          </Row>
          <ChatBottomBorder />
          <Hr />
        </ChatsContainer>
      </Container>
    );
  }
}
