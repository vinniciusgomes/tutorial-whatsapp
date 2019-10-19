import React, {Component} from 'react';

import {Container, Avatar, Name} from './styles';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Avatar source={this.props.avatar} />
        <Name>{this.props.name}</Name>
      </Container>
    );
  }
}
