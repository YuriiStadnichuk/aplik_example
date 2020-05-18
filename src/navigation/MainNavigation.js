import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../screens/Main/Main';
import AllResumeVacancy from '../screens/Main/AllResumeVacancy';
import Filters from '../screens/Main/Filters/Filters';
import FilterProfession from '../screens/Main/Filters/FilterProfession';
import FilterCity from '../screens/Main/Filters/FilterCity';
import FilterHeading from '../screens/Main/Filters/FilterHeading';
import FilterQualification from '../screens/Main/Filters/FilterQualification';
import FilterAge from '../screens/Main/Filters/FilterAge';
import WatchVideo from '../screens/Main/WatchVideo';
import AuthStack from './AuthNavigation' 

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="AuthStack"
      component={AuthStack}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="Main"
      component={Main}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="WatchVideo"
      component={WatchVideo}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="AllResumeVacancy"
      component={AllResumeVacancy}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="Filters"
      component={Filters}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="FilterProfession"
      component={FilterProfession}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="FilterCity"
      component={FilterCity}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="FilterHeading"
      component={FilterHeading}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="FilterAge"
      component={FilterAge}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="FilterQualification"
      component={FilterQualification}
      options={{headerShown: false}}
    />
  </MainStack.Navigator>
);
