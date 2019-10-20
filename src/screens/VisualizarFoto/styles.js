import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
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
  height: 80%;
  margin-top: 5%;
  background-color: ${colors.white};
`;

export const SentAreaContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;
`;

export const SentButton = styled.View`
  width: 60px;
  height: 60px;
  margin-top: -50px;
  border-radius: 30px;
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
