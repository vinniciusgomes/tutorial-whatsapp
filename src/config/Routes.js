import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import MainScreen from '~/screens/Main';
import EnvioMensagem from '~/screens/EnvioMensagem';
import EnvioAudio from '~/screens/EnvioAudio';
import NovaConversa from '~/screens/NovaConversa';
import IniciarLigacao from '~/screens/IniciarLigacao';
import Ligacao from '~/screens/Ligacao';
import ListaMensagens from '~/screens/ListaMensagens';
import VisualizarFoto from '~/screens/VisualizarFoto';
import EnvioFoto from '~/screens/EnvioFoto';
import Camera from '~/screens/Camera';

const AppNavigator = createSwitchNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    EnvioMensagem: {
      screen: EnvioMensagem,
    },
    EnvioAudio: {
      screen: EnvioAudio,
    },
    NovaConversa: {
      screen: NovaConversa,
    },
    IniciarLigacao: {
      screen: IniciarLigacao,
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
    EnvioFoto: {
      screen: EnvioFoto,
    },
    Camera: {
      screen: Camera,
    },
  },
  {
    initialRouteName: 'EnvioFoto',
  },
);

export default createAppContainer(AppNavigator);
