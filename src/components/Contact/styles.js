import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-left: 15px;
`;
