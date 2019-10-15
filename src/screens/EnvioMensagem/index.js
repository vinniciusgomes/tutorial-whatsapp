import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Container, Body, ChatArea} from './styles';

import Header from '~/components/Header';
import SentArea from '~/components/SentArea';

export default class EnvioMensagem extends Component {
  avatar = require('~/assets/img/woman.jpeg');
  render() {
    return (
      <Container>
        {/* <StatusBar backgroundColor={colors.darkTeal} /> */}
        <Header name="Mina do Google" avatar={this.avatar} />
        <Body>
          <ChatArea />
          <SentArea />
        </Body>
      </Container>
    );
  }
}
