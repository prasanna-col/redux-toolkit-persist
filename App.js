/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,

} from 'react-native';
import StackNavi from './Src/Navigation/Stacknav';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";
import { store, persistor } from './Src/Reduxtoolkit/Store';

const App = () => {

  // const persistor = persistStore(store);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <StackNavi></StackNavi>

          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};



export default App;
