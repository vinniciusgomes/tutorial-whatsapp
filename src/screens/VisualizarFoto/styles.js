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
