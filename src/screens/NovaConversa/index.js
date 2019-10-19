import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
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
} from './styles';
import Contact from '~/components/Contact';

export default class NovaConversa extends Component {
  render() {
    return (
      <Container>
        <Header>
          <BackButton>
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
            avatar={require('~/assets/img/person.jpeg')}
            name="Japinha"
          />
          <Contact
            avatar={require('~/assets/img/person3.jpg')}
            name="Einstein"
          />
        </Body>
      </Container>
    );
  }
}
