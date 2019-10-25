import React, {Component} from 'react';
import {Text, PermissionsAndroid} from 'react-native';
import {Player, Recorder} from '@react-native-community/audio-toolkit';
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
      recording: false,
    };
  }

  _changeText(text) {
    this.setState({text});
  }

  async recorderFunc() {
    try{
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

      if(granted === PermissionsAndroid.RESULTS.GRANTED){
        if(!this.state.recording){
          this.recorder = new Recorder('file:///sdcard/music2.acc');
          this.recorder.record((err) => {
            console.log(err)
            this.setState({recording: true});
            console.log('gravando');
          });
        }else{
          this.recorder.stop(() => {
            this.audio = new Player('file:///sdcard/music2.acc');
            this.audio.play((err) => {
              console.log(err);
            });
            this.setState({recording: false});
            console.log('fim gravar');
          });
        }
      }else{
        console.log('nao permitido');
      }
    }catch(err){
      console.log(err);
    }
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
          <ActionButton
            onPress={() => {
              this.recorderFunc();
            }}>
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
