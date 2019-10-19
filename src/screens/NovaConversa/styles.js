import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 8px 15px;
  background-color: ${colors.darkTeal};
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.white};
`;

export const ContactCount = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const Body = styled.ScrollView`
  flex: 1;
`;

export const NewGroup = styled.TouchableOpacity`
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const NewGroupAvatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20;
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const NewGroupTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const NewContact = styled.TouchableOpacity`
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const NewContactAvatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20;
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const NewContactTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
