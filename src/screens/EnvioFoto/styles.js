import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Body = styled.View`
  flex: 1;
  padding: 10px 5px;
  background-color: ${colors.chatBg};
`;

export const ChatArea = styled.ScrollView`
  flex: 1;
  padding: 5px;
`;
