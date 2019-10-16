import styled from 'styled-components';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${colors.black};
`;

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
`;

export const UserInfos = styled.View`
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.white};
`;

export const UserPhone = styled.Text`
  font-size: 17px;
  font-weight: 300;
  margin-top: 10px;
  color: ${colors.white};
`;

export const UserPhoto = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 50px;
  background-color: ${colors.white};
`;

export const ActionsButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
`;

export const ActionButton = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${colors.white};
`;

export const HangUpContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const HangUp = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${colors.white};
`;
