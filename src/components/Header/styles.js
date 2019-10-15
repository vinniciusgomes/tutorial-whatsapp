import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  padding: 15px 10px;
  background-color: ${colors.darkTeal};
  flex-direction: row;
  justify-content: space-between;
`;

export const Contact = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  margin-left: 5px;
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-size: 20px;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 15px;
`;
