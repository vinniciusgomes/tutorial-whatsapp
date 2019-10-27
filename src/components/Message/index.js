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
} from './styles';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  componentDidMount() {
    if (this.props.type === 'audio') {
      this.player = new Player(`${this.props.content}`, {
        autoDestroy: false,
      }).prepare(() => {
        let segundo = ((this.player.duration / 1000) % 60) <= 9 ? "0" + Math.floor(((this.player.duration / 1000) % 60)) : Math.floor((this.player.duration / 1000) % 60);
        let minutos = (this.player.duration / 1000) / 60;
        let minuto = Math.floor(minutos % 60) <= 9 ? "0" + Math.floor(minutos % 60) : Math.floor(minutos % 60);
        this.setState({duration: minuto + ':' + segundo});
      });
    }
    // if (this.props.text) {
    //   this.setState({messageType: 'text'});
    // } else if (this.props.image) {
    //   this.setState({messageType: 'image'});
    // }
    // console.log(this.props.image);
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
              source={{uri: `data:image/jpg;base64,${this.props.image}`}}
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
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </SliderContainer>
          </AudioContainer>
        ) : null}
        <Time>23:34</Time>
        <Icon name="check-all" size={18} color={colors.text} />
      </Container>
    );
  }
}
