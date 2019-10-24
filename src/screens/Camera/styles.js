import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
`;

export const CaptureButton = styled.TouchableOpacity`
  border-style: solid;
  border-width: 5px;
  border-color: ${colors.white};
  width: 75px;
  height: 75px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 37.5px;
  align-self: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Flash = styled.View``;

export const ChangeCamera = styled.View``;
