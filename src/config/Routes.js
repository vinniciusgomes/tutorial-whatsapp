import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import MainScreen from '~/screens/Main';
import EnvioMensagem from '~/screens/EnvioMensagem';
import NovaConversa from '~/screens/NovaConversa';
import Ligacao from '~/screens/Ligacao';
import ListaMensagens from '~/screens/ListaMensagens';

const AppNavigator = createSwitchNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    EnvioMensagem: {
      screen: EnvioMensagem,
    },
    NovaConversa: {
      screen: NovaConversa,
    },
    Ligacao: {
      screen: Ligacao,
    },
    ListaMensagens: {
      screen: ListaMensagens,
    },
  },
  {
    initialRouteName: 'NovaConversa',
  },
);

export default createAppContainer(AppNavigator);
