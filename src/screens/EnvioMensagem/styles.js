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

export const ModalContainer = styled.View`
  width: 100%;
  background-color: ${colors.white};
  padding: 22px;
  justify-content: center;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.Text`
  font-size: 22px;
  margin-bottom: 5px;
  font-weight: 700;
`;

export const ModalSubtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 400;
`;

export const ModalImageContainer = styled.View`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const ModalImage = styled.Image`
  width: 100%;
  height: 50px;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.darkTeal};
  padding: 10px;
  border-radius: 3px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
`;
