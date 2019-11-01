import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const UserPhoto = styled.View`
  height: 35px;
  width: 35px;
  border-radius: 17.5px;
  background-color: ${colors.white};
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const SentAreaContainer = styled.View`
  flex-direction: row;
  height: 60px;
  align-items: center;
  padding: 0px 20px 0px 20px;
  background-color: #000000;
  opacity: 0.8;
`;

export const SentButton = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  margin-top: -60px;
  border-radius: 32.5px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.teal};
`;

export const AddNewImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddDescription = styled.TextInput`
  color: ${colors.white};
  margin-left: 20px;
  width: 70%;
`;

export const Separator = styled.View`
  width: 1;
  height: 100%;
  background-color: ${colors.white};
`;

export const Image = styled.ImageBackground`
  flex: 1;
  height: 100%;
  justify-content: space-between;
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
  height: 130px;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: ${colors.darkTeal};
  padding: 10px;
  border-radius: 3px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
`;
