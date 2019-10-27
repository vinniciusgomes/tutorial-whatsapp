import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Container, Body, ChatArea} from './styles';

import Header from '~/components/Header';
import SentArea from '~/components/SentArea';
import Message from '~/components/Message';

export default class EnvioAudio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  sent = (content, type) => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          content: content.trim(),
          type: type,
        },
      ],
    });
  };

  render() {
    this.avatar = require('~/assets/img/woman.jpeg');
    return (
      <Container>
        {/* <StatusBar backgroundColor={colors.darkTeal} /> */}
        <Header name="Mina do Google" avatar={this.avatar} />
        <Body>
          <ChatArea>
            {this.state.messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  content={message.content}
                  type={message.type}
                  avatar={this.avatar}
                />
              );
            })}
          </ChatArea>
          <SentArea sent={this.sent} />
        </Body>
      </Container>
    );
  }
}
