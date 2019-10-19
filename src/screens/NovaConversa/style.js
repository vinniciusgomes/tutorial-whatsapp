import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 10px;
  background-color: ${colors.darkTeal};
  color: ${colors.white};
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

export const ContactCount = styled.Text`
  font-size: 14px;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
