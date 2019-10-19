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

export const UserPhoto = styled.View`
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

export const ActionButton = styled.View`
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
