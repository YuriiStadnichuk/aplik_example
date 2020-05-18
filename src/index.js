import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from '../src/navigation/AuthNavigation';

const SwitchStack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator size="large" color="blue" />
            </View>
          }
          persistor={persistor}>
          <NavigationContainer>
            <SwitchStack.Navigator initialRouteName="AppNavigation">
              <SwitchStack.Screen
                name="Auth"
                component={AuthStack}
                options={{headerShown: false}}
              />
              <SwitchStack.Screen
                name="AppNavigation"
                component={AppNavigation}
                options={{headerShown: false}}
              />
            </SwitchStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
