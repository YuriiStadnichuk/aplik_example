import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LogReg from '../screens/auth/LogReg';
import Registration from '../screens/auth/Registration';
import RegistrationComplete from '../screens/auth/RegistrationComplete';
import LogIn from '../screens/auth/LogIn';
import RestorePassword from '../screens/auth/RestorePassword';
import RestoreStepTwo from '../screens/auth/RestoreStepTwo';
import RestoreStepThree from '../screens/auth/RestoreStepThree';

const AuthStack = createStackNavigator();

export default () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="LogReg"
      component={LogReg}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Registration"
      component={Registration}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="RegistrationComplete"
      component={RegistrationComplete}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="LogIn"
      component={LogIn}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="RestorePassword"
      component={RestorePassword}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="RestoreStepTwo"
      component={RestoreStepTwo}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="RestoreStepThree"
      component={RestoreStepThree}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);
