import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/assets/Colors';
import {
  Container,
  Text,
  Time,
  TextContainer,
  ImageContainer,
  Image
} from './styles';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageType: 'text',
    };
  }

  componentDidMount() {
    if (this.props.text) {
      this.setState({messageType: 'text'});
    } else if (this.props.image) {
      this.setState({messageType: 'image'});
    }
    console.log(this.props.image);
  }

  render() {
    return (
      <Container>
        {this.state.messageType === 'text' ? (
          <TextContainer>
            <Text>{this.props.text}</Text>
          </TextContainer>
        ) : null}
        {this.state.messageType === 'image' ? (
          <ImageContainer>
            <Image
              source={{uri: `data:image/jpg;base64,${this.props.image}`}}
            />
          </ImageContainer>
        ) : null}
        <Time>23:05</Time>
        <Icon name="check-all" size={18} color={colors.text} />
      </Container>
    );
  }
}
