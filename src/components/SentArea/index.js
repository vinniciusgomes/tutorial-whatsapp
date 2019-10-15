import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/assets/Colors';

import {
  Container,
  Message,
  Emoji,
  Attachment,
  ActionButton,
  Input,
} from './styles';

export default class SentArea extends Component {
  render() {
    return (
      <Container>
        <Message>
          <Emoji>
            <Icon name="emoticon-happy-outline" size={28} color={colors.text} />
          </Emoji>
          <Input />
          <Attachment>
            <Icon name="attachment" size={28} color={colors.text} />
          </Attachment>
          <Attachment>
            <Icon name="camera" size={28} color={colors.text} />
          </Attachment>
        </Message>
        <ActionButton>
          <Icon name="microphone" size={28} color={colors.white} />
        </ActionButton>
      </Container>
    );
  }
}
