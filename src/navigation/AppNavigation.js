import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ProfileStack from './ProfileNavigation';
import MainStack from './MainNavigation';
import ChatStack from './ChatNavigation';
import AddVideoStack from './AddVideoNavigation';
import Favorites from '../screens/Favorites';

import {BottomTabIcons, colors} from '../constants';

const windowHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

function getTabBarVisible(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen;
  console.log(route);
  if (routeName === 'RecordVideo') {
    return false;
  }
  if (routeName === 'WatchVideo') {
    return false;
  }
  if (routeName === 'WatchOwnVideo') {
    return false;
  }
  if (routeName === 'LogOut') {
    return false;
  }
  if (routeName === 'ChooseTypeProfile') {
    return false;
  }
  if (routeName === 'AuthStack') {
    return false;
  }
  return true;
}

function AppNavigation() {
  return (
    <Tab.Navigator
      //initialRouteName="AddVideoStack"

      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: 'white',
          elevation: 0,
          borderTopWidth: 0,
          height: hp('8.93%'),
          alignItems: 'center',
          justifyContent: 'center',
          // borderTopLeftRadius: 12,
          // borderTopRightRadius: 12,
          // position: 'absolute',
          // left: 0,
          // bottom: 0,
          // right: 0,
        },
        tabStyle: {
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
          height: hp('8.93%'),
        },
      }}>
      {/* <Tab.Navigator
        options={({route}) => ({
          showLabel: false,
          style: {
            backgroundColor: 'white',
            // position: 'absolute',
            // left: 0,
            // bottom: 0,
            // right: 0,
            elevation: 0,
            borderTopWidth: 0,
            height: 80,
          },
          tabStyle: {backgroundColor: 'transparent'},
        })}> */}
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused === true ? (
              <BottomTabIcons.DotsActive
                stroke={colors.BUTTON_GRADIENT_START}
                strokeWidth="2"
                strokeOpacity={0.3}
              />
            ) : (
              <BottomTabIcons.Dots />
            ),
        })}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused === true ? (
              <BottomTabIcons.StarActive
                stroke={colors.BUTTON_GRADIENT_START}
                strokeWidth="2"
                strokeOpacity={0.3}
              />
            ) : (
              <BottomTabIcons.Star />
            ),
        }}
      />
      <Tab.Screen
        name="AddVideoStack"
        component={AddVideoStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused === true ? (
              <BottomTabIcons.AddVideoActive
                stroke={colors.BUTTON_GRADIENT_START}
                strokeWidth="2"
                strokeOpacity={0.3}
              />
            ) : (
              <BottomTabIcons.AddVideo />
            ),
        })}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused === true ? (
              <BottomTabIcons.ChatActive
                stroke={colors.BUTTON_GRADIENT_START}
                strokeWidth="2"
                strokeOpacity={0.3}
              />
            ) : (
              <BottomTabIcons.Chat />
            ),
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused === true ? (
              <BottomTabIcons.UserActive
                stroke={colors.BUTTON_GRADIENT_START}
                strokeWidth="2"
                strokeOpacity={0.3}
              />
            ) : (
              <BottomTabIcons.User />
            ),
        })}
      />
    </Tab.Navigator>
  );
}
export default AppNavigation;
