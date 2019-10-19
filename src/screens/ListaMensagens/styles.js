import styled from 'styled-components';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const HeaderText = styled.Text`
  color: ${colors.black};
  font-weight: 400;
`;

export const SearchBarContainer = styled.View`
  width: 100%;
  height: auto;
  background-color: #cbcacf;
  padding: 10px;
`;

export const SearchBar = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 20px;
  background-color: ${colors.white};
`;

export const EditButton = styled.Text`
  color: ${colors.nativeBlue};
  font-size: 18px;
`;

export const ChatsContainer = styled.View`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const ChatRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ChatPhoto = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${colors.black};
`;

export const ChatText = styled.Text`
  color: ${colors.black};
  font-size: 17px;
`;

export const ChatBottomBorder = styled.View`
  background-color: ${colors.black};
  width: 100%;
  height: 0.2px;
  margin-right: -20px !important;
  margin-top: 20px;
`;
