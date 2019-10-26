import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Message = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${colors.white};
  padding: 10px 15px;
  align-items: center;
  border-radius: 25;
  max-height: 150px;
  align-items: flex-end;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0;
  font-size: 18px;
  margin: 0;
`;

export const Emoji = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Attachment = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const CameraButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: ${colors.darkTeal};
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 25;
`;

export const TimerContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Timer = styled.Text`
  font-size: 20px;
  color: ${colors.text};
`;

export const CancelButton = styled.TouchableOpacity`
  align-self: center;
`;

export const CancelText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.cancelRed};
  align-self: center;
  margin-right: 5px;
`;
