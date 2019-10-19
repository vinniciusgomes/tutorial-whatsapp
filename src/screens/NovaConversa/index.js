import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/assets/Colors';
import {
  Container,
  Header,
  BackButton,
  TitleContainer,
  Title,
  ContactCount,
  ActionButton,
} from './styles';

export default class NovaConversa extends Component {
  render() {
    return (
      <Container>
        <Header>
          <BackButton>
            <Icon name="arrow-left" size={20} color={colors.white} />
          </BackButton>
          <TitleContainer>
            <Title>Selecionar contato</Title>
            <ContactCount>122 contatos</ContactCount>
          </TitleContainer>
          <ActionButton>
            <Icon name="search" size={20} color={colors.white} />
          </ActionButton>
          <ActionButton>
            <Icon name="dots-vertical" size={20} color={colors.white} />
          </ActionButton>
        </Header>
      </Container>
    );
  }
}
