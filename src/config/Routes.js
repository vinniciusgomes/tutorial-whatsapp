import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import MainScreen from '~/screens/Main';
import EnvioMensagem from '~/screens/EnvioMensagem';
import NovaConversa from '~/screens/NovaConversa';

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
  },
  {
    initialRouteName: 'NovaConversa',
  },
);

export default createAppContainer(AppNavigator);
