import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import MainScreen from '~/screens/Main';
import EnvioMensagem from '~/screens/EnvioMensagem';
import Ligacao from '~/screens/Ligacao';

const AppNavigator = createSwitchNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    EnvioMensagem: {
      screen: EnvioMensagem,
    },
    Ligacao: {
      screen: Ligacao,
    },
  },
  {
    initialRouteName: 'Ligacao',
  },
);

export default createAppContainer(AppNavigator);
