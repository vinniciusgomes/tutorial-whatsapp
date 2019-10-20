import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Container, Body, ChatArea} from './styles';

import Header from '~/components/Header';
import SentArea from '~/components/SentArea';
import Message from '~/components/Message';

export default class EnvioMensagem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  sent = text => {
    this.setState({messages: [...this.state.messages, text.trim()]});
  };

  avatar = require('~/assets/img/woman.jpeg');
  render() {
    return (
      <Container>
        {/* <StatusBar backgroundColor={colors.darkTeal} /> */}
        <Header name="Mina do Google" avatar={this.avatar} />
        <Body>
          <ChatArea>
            {this.state.messages.map((message, index) => {
              return <Message key={index} text={message} />;
            })}
          </ChatArea>
          <SentArea sent={this.sent} />
        </Body>
      </Container>
    );
  }
}
