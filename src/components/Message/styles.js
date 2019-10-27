import styled from 'styled-components/native';
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex-direction: row;
  padding: 8px;
  background-color: ${colors.chatBubble};
  border-radius: 5;
  align-self: flex-end;
  margin-bottom: 2px;
  max-width: 75%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TextContainer = styled.View`
  flex-shrink: 1;
`;

export const Text = styled.Text`
  font-size: 16px;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: ${colors.text};
  margin-left: 10px;
  margin-right: 5px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  height: auto;
`;

export const Image = styled.ImageBackground`
  flex: 1;
  height: 250px;
  width: auto;
`;

export const AudioContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 5px;
`;

export const SliderContainer = styled.View`
  flex: 1;
`;

export const Duration = styled.Text`
  font-size: 12px;
  color: ${colors.text};
  margin: 0;
  margin-left: 15px;
`;
