import styled from 'styled-components'
import colors from '~/assets/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: ${colors.lightTeal};
  padding: 30px 20px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
  margin-left: 15px;
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const BodyTitleContainer = styled.View`
  flex-direction: row;
  margin-top: 26px;
  margin-bottom: 26px;
`;

export const BodyTitle = styled.Text`
  color: ${colors.title};
  font-size: 22px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${colors.lightTeal};
  border-radius: 10;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

export const OptionTitle = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
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
