import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Contact,
  BackButton,
  Avatar,
  Name,
  Actions,
  ActionButton,
} from './styles';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Contact>
          <BackButton>
            <Icon name="arrow-left" color="#fff" size={24} />
            <Avatar source={this.props.avatar} />
          </BackButton>
          <Name>{this.props.name}</Name>
        </Contact>
        <Actions>
          <ActionButton>
            <Icon name="video" color="#fff" size={26} />
          </ActionButton>
          <ActionButton onPress={() => this.props.navigate()}>
            <Icon name="phone" color="#fff" size={26} />
          </ActionButton>
        </Actions>
      </Container>
    );
  }
}
