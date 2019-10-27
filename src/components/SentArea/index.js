import React, {Component} from 'react';
import {PermissionsAndroid} from 'react-native';
import {Recorder} from '@react-native-community/audio-toolkit';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/assets/Colors';

import {
  Container,
  Message,
  Emoji,
  Attachment,
  ActionButton,
  CameraButton,
  Input,
  CancelButton,
  CancelText,
  TimerContainer,
  Timer,
} from './styles';

export default class SentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      numOfLinesCompany: 0,
      recording: false,
      pulse: true,
      timer: 0,
      formattedTimer: '00:00',
      timerInterval: null,
      pulseInterval: null,
    };
  }

  _changeText(text) {
    this.setState({text});
  }

  async recorderFunc() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        if (!this.state.recording) {
          this.recorder = new Recorder('file:///sdcard/music2.acc');
          this.recorder.record(() => {
            this.setState({recording: true});
            let timer = setInterval(() => {
              this.setState({timer: this.state.timer + 1});
              let segundo = (this.state.timer % 60) <= 9 ? "0" + (this.state.timer % 60) : this.state.timer % 60;
              let minutos = this.state.timer / 60;
              let minuto = Math.floor(minutos % 60) <= 9 ? "0" + Math.floor(minutos % 60) : Math.floor(minutos % 60);
              this.setState({formattedTimer: minuto + ':' + segundo});
            }, 1000);
            this.setState({timerInterval: timer});
            let pulse = setInterval(() => {
              this.setState({pulse: !this.state.pulse});
            }, 600);
            this.setState({pulseInterval: pulse});
          });
        } else {
          // this.recorder.stop(() => {
          //   this.setState({pulse: true});
          //   this.audio = new Player(
          //     'file:///sdcard/prototipo/audio/music2.acc',
          //   );
          //   this.audio.play(() => {
          //     this.setState({recording: false});
          //   });
          // });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  _cancelRecorder() {
    this.recorder.stop(() => {
      this.setState({
        pulse: true,
        recording: false,
        timer: 0,
        formattedTimer: '00:00',
      });
      clearTimeout(this.state.timerInterval);
      clearTimeout(this.state.pulseInterval);
    });
  }

  render() {
    return (
      <Container>
        <Message>
          <Emoji>
            {this.state.recording ? (
              <Icon
                name="microphone"
                size={28}
                color={colors.cancelRed}
                style={{opacity: this.state.pulse ? 1 : 0}}
              />
            ) : (
              <MaterialIcon
                name="insert-emoticon"
                size={28}
                color={colors.text}
              />
            )}
          </Emoji>
          {!this.state.recording ? (
            <Input
              multiline
              onChangeText={text => {
                this._changeText(text);
              }}
              value={this.state.text}
            />
          ) : (
            <TimerContainer>
              <Timer>{this.state.formattedTimer}</Timer>
            </TimerContainer>
          )}
          {this.state.recording ? (
            <CancelButton
              onPress={() => {
                this._cancelRecorder();
              }}>
              <CancelText>cancelar</CancelText>
            </CancelButton>
          ) : (
            <>
              <Attachment>
                <Icon name="attachment" size={28} color={colors.text} />
              </Attachment>
              {this.state.text.trim() === '' ? (
                <Attachment>
                  <Icon name="camera" size={28} color={colors.text} />
                </Attachment>
              ) : null}
            </>
          )}
        </Message>
        {this.state.text.trim() === '' && this.state.recording === false ? (
          <ActionButton
            onPress={() => {
              this.recorderFunc();
            }}>
            <Icon name="microphone" size={22} color={colors.white} />
          </ActionButton>
        ) : (
          <ActionButton
            onPress={() => {
              this.state.recording ? this._cancelRecorder() : null;
              this.state.recording
                ? this.props.sent('file:///sdcard/music2.acc', 'audio')
                : this.props.sent(this.state.text, 'text');
              this.setState({text: ''});
            }}>
            <Icon name="send" size={22} color={colors.white} />
          </ActionButton>
        )}
      </Container>
    );
  }
}
