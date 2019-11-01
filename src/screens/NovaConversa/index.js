import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import Modal from 'react-native-modal';
import colors from '~/assets/Colors';
import {
  Container,
  Header,
  BackButton,
  TitleContainer,
  Title,
  ContactCount,
  ActionButton,
  Body,
  NewGroup,
  NewGroupAvatar,
  NewGroupTitle,
  NewContact,
  NewContactAvatar,
  NewContactTitle,
  ModalContainer,
  ModalTitle,
  ModalSubtitle,
  ModalButtonContainer,
  ModalImageContainer,
  ModalImage,
  Button,
  Text,
} from './styles';
import Contact from '~/components/Contact';

export default class NovaConversa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: null,
    };
  }

  componentDidMount() {
    this.setState({visibleModal: 'step1'});
  }

  renderModalContent(title, subtitle, textButton1, textButton2, source, next) {
    return (
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        {source ? (
          <ModalImageContainer>
            <ModalImage source={source} />
          </ModalImageContainer>
        ) : null}
        <ModalButtonContainer>
          {textButton1 !== '' ? (
            <Button onPress={() => this.setState({visibleModal: null})}>
              <Text>{textButton1}</Text>
            </Button>
          ) : null}
          <Button onPress={() => this.setState({visibleModal: next})}>
            <Text>{textButton2}</Text>
          </Button>
        </ModalButtonContainer>
      </ModalContainer>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <BackButton onPress={() => this.props.navigation.navigate('Main')}>
            <Icon name="arrow-left" size={24} color={colors.white} />
          </BackButton>
          <TitleContainer>
            <Title>Selecionar contato</Title>
            <ContactCount>122 contatos</ContactCount>
          </TitleContainer>
          <ActionButton>
            <OcticonsIcon name="search" size={18} color={colors.white} />
          </ActionButton>
          <ActionButton>
            <Icon name="dots-vertical" size={26} color={colors.white} />
          </ActionButton>
        </Header>
        <Body>
          <NewGroup>
            <NewGroupAvatar>
              <MaterialIcon name="group-add" size={22} color={colors.white} />
            </NewGroupAvatar>
            <NewGroupTitle>Novo grupo</NewGroupTitle>
          </NewGroup>
          <NewContact>
            <NewContactAvatar>
              <MaterialIcon name="person-add" size={22} color={colors.white} />
            </NewContactAvatar>
            <NewContactTitle>Novo contato</NewContactTitle>
          </NewContact>
          <Contact
            onPress={() => this.props.navigation.navigate('EnvioMensagem')}
            avatar={require('~/assets/img/person.jpeg')}
            name="Mariana Guimarães"
          />
          <Contact
            onPress={() => this.props.navigation.navigate('EnvioMensagem')}
            avatar={require('~/assets/img/person3.jpg')}
            name="Rodrigo Pereira"
          />
        </Body>
        <Modal isVisible={this.state.visibleModal === 'step1'}>
          {this.renderModalContent(
            'Iniciar Conversa',
            'Clique em cima do contato de um de seus amigos da lista para iniciar uma conversa.',
            '',
            'Iniciar',
            null,
            null,
          )}
        </Modal>
      </Container>
    );
  }
}
