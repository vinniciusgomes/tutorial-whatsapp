import styled from 'styled-components';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${colors.black};
`;

export const Header = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-weight: 400;
  margin-left: 15%;
`;

export const UserInfos = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const UserName = styled.Text`
  font-size: 26px;
  font-weight: 500;
  color: ${colors.white};
`;

export const UserPhone = styled.Text`
  font-size: 17px;
  font-weight: 300;
  margin-top: 10px;
  color: ${colors.white};
`;

export const UserPhoto = styled.Image`
  width: 220px;
  height: 220px;
  border-radius: 110px;
  margin-top: 50px;
  background-color: ${colors.white};
`;

export const ActionsButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin: 0px 15px 0px 15px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const CallEndContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const CallEnd = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.red};
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
