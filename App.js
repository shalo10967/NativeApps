import React from "react";
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/core/store';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from './src/navigations';

import { totalSize } from '@utils/Dimensiones';


const AppContainer = createAppContainer(AppNavigator);

const theme = {
  ...DefaultTheme,
  roundness: totalSize(0.5),
  colors: {
    ...DefaultTheme.colors,
    text: "#323232",
    error: "#d61a0c"
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    return (
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      </PaperProvider>
    )
  }
}
