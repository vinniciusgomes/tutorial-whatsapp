import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex-direction: row;
`;

export const Message = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${colors.white};
  padding: 0px 15px;
  border-radius: 100;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0;
  font-size: 18px;
  margin: 0;
`;

export const Emoji = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Attachment = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: ${colors.darkTeal};
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
  border-radius: 100;
`;
