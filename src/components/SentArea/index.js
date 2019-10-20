import React, {Component} from 'react';
import {Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
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
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      numOfLinesCompany: 0,
    };
  }

  _changeText(text) {
    this.setState({text});
  }

  render() {
    return (
      <Container>
        <Message>
          <Emoji>
            <MaterialIcon
              name="insert-emoticon"
              size={28}
              color={colors.text}
            />
          </Emoji>
          <Input
            multiline
            onChangeText={text => {
              this._changeText(text);
            }}
            value={this.state.text}
          />
          <Attachment>
            <Icon name="attachment" size={28} color={colors.text} />
          </Attachment>
          {this.state.text.trim() === '' ? (
            <Attachment>
              <Icon name="camera" size={28} color={colors.text} />
            </Attachment>
          ) : null}
        </Message>
        {this.state.text.trim() === '' ? (
          <ActionButton>
            <Icon name="microphone" size={22} color={colors.white} />
          </ActionButton>
        ) : (
          <ActionButton
            onPress={() => {
              this.props.sent(this.state.text);
              this.setState({text: ''});
            }}>
            <Icon name="send" size={22} color={colors.white} />
          </ActionButton>
        )}
      </Container>
    );
  }
}
