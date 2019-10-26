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

  componentDidMount() {
    const imageUri = this.props.navigation.getParam('imageUri');
    if (imageUri) {
      this.setState({imageUri});
      this.sent(imageUri);
    }
  }

  sent = image => {
    this.setState({messages: [...this.state.messages, image]});
  };

  avatar = require('~/assets/img/woman.jpeg');
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#054a42" />
        <Header name="Mina do Google" avatar={this.avatar} />
        <Body>
          <ChatArea>
            {this.state.messages.map((image, index) => {
              return <Message key={index} image={image} />;
            })}
          </ChatArea>
          <SentArea
            onPress={() => this.props.navigation.navigate('Camera')}
            sent={this.sent}
          />
        </Body>
      </Container>
    );
  }
}
