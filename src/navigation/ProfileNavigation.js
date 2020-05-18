import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ChooseTypeProfile from '../screens/Profile/ChooseTypeProfile';
import Profile from '../screens/Profile/Profile';
import EmployeePersonalData from '../screens/Profile/EmployeePersonalData';
import EmployerPersonalData from '../screens/Profile/EmployerPersonalData';
import CityChoose from '../screens/Profile/CityChoose';
import HeadingChoose from '../screens/Profile/HeadingChoose';
import ProfessionChoose from '../screens/Profile/ProfessionChoose';
import QualificationChoose from '../screens/Profile/QualificationChoose';
import MyVideos from '../screens/Profile/MyVideos';
import PurchaseHistory from '../screens/Profile/PurchaseHistory';
import WatchOwnVideo from '../screens/Profile/WatchOwnVideo';
import PromotionVideo from '../screens/Profile/PromotionVideo';
import VideoInTop from '../screens/Profile/VideoInTop';
import VideoInTopDone from '../screens/Profile/VideoInTopDone';
import LogOut from '../screens/Profile/LogOut';

const ProfileStack = createStackNavigator();

export default () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="ChooseTypeProfile"
      component={ChooseTypeProfile}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="EmployeePersonalData"
      component={EmployeePersonalData}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="EmployerPersonalData"
      component={EmployerPersonalData}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="CityChoose"
      component={CityChoose}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="HeadingChoose"
      component={HeadingChoose}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="ProfessionChoose"
      component={ProfessionChoose}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="QualificationChoose"
      component={QualificationChoose}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="MyVideos"
      component={MyVideos}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="PurchaseHistory"
      component={PurchaseHistory}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="LogOut"
      component={LogOut}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="WatchOwnVideo"
      component={WatchOwnVideo}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="PromotionVideo"
      component={PromotionVideo}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="VideoInTop"
      component={VideoInTop}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="VideoInTopDone"
      component={VideoInTopDone}
      options={{headerShown: false}}
    />
  </ProfileStack.Navigator>
);
