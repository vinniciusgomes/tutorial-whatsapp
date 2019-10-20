import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/assets/Colors';
import {Container, Text, Time, TextContainer} from './styles';

export default class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <TextContainer>
          <Text>{this.props.text}</Text>
        </TextContainer>
        <Time>23:05</Time>
        <Icon name="check-all" size={18} color={colors.text} />
      </Container>
    );
  }
}
