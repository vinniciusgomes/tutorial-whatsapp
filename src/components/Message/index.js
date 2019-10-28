import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Player} from '@react-native-community/audio-toolkit';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/assets/Colors';
import {
  Container,
  Text,
  Time,
  TextContainer,
  ImageContainer,
  Image,
  AudioContainer,
  Avatar,
  SliderContainer,
  Duration,
} from './styles';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  componentDidMount() {
    console.log(this.props.type);
    if (this.props.type === 'audio') {
      this.player = new Player(`${this.props.content}`, {
        autoDestroy: false,
      }).prepare(() => {
        this.setState({unformattedDuration: this.player.duration});
        let segundo =
          (this.player.duration / 1000) % 60 <= 9
            ? '0' + Math.floor((this.player.duration / 1000) % 60)
            : Math.floor((this.player.duration / 1000) % 60);
        let minutos = this.player.duration / 1000 / 60;
        let minuto =
          Math.floor(minutos % 60) <= 9
            ? '0' + Math.floor(minutos % 60)
            : Math.floor(minutos % 60);
        this.setState({duration: minuto + ':' + segundo});
      });

      let progressInterval = setInterval(() => {
        if (this.player) {
          let currentProgress = this.player.currentTime;
          if (isNaN(currentProgress)) {
            currentProgress = 0;
          }

          if (currentProgress > 0) {
            let segundo =
              (currentProgress / 1000) % 60 <= 9
                ? '0' + Math.floor((currentProgress / 1000) % 60)
                : Math.floor((currentProgress / 1000) % 60);
            let minutos = currentProgress / 1000 / 60;
            let minuto =
              Math.floor(minutos % 60) <= 9
                ? '0' + Math.floor(minutos % 60)
                : Math.floor(minutos % 60);
            this.setState({duration: minuto + ':' + segundo});
          }

          this.setState({progress: currentProgress});
        }
      }, 100);
    }
  }

  _play() {
    if (!this.state.playing) {
      this.player
        .play(err => {
          if (!err) {
            this.setState({playing: true});
          }
        })
        .on('ended', () => {
          this.setState({playing: false});
          this.player.destroy();
        });
    } else {
      this.player.pause(err => {
        if (!err) {
          this.setState({playing: false});
        }
      });
    }
  }

  _seek(progress) {
    if (this.player) {
      this.player.seek(progress);
    }
  }

  render() {
    return (
      <Container>
        {this.props.type === 'text' ? (
          <TextContainer>
            <Text>{this.props.content}</Text>
          </TextContainer>
        ) : null}
        {this.props.type === 'image' ? (
          <ImageContainer>
            <Image
              source={{uri: `data:image/jpg;base64,${this.props.content}`}}
            />
          </ImageContainer>
        ) : null}
        {this.props.type === 'audio' ? (
          <AudioContainer>
            <Avatar source={this.props.avatar} />
            <TouchableOpacity
              onPress={() => {
                this._play();
              }}>
              {this.state.playing ? (
                <Icon name="pause" size={38} color={colors.text} />
              ) : (
                <Icon name="play" size={38} color={colors.text} />
              )}
            </TouchableOpacity>
            <SliderContainer>
              <Slider
                style={{flex: 1, width: '100%'}}
                value={this.state.progress}
                minimumValue={0}
                maximumValue={this.state.unformattedDuration}
                minimumTrackTintColor={colors.text}
                maximumTrackTintColor={colors.text}
                thumbTintColor={colors.text}
                onSlidingComplete={value => {
                  this._seek(value);
                }}
              />
              <Duration>{this.state.duration}</Duration>
            </SliderContainer>
          </AudioContainer>
        ) : null}
        <Time>23:34</Time>
        <Icon name="check-all" size={18} color={colors.text} />
      </Container>
    );
  }
}
