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
