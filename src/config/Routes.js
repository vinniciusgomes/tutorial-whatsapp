import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import MainScreen from '~/screens/Main';
import EnvioMensagem from '~/screens/EnvioMensagem';
import NovaConversa from '~/screens/NovaConversa';
import Ligacao from '~/screens/Ligacao';
import ListaMensagens from '~/screens/ListaMensagens';
import VisualizarFoto from '~/screens/VisualizarFoto';

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
    VisualizarFoto: {
      screen: VisualizarFoto,
    },
  },
  {
    initialRouteName: 'EnvioMensagem',
  },
);

export default createAppContainer(AppNavigator);
