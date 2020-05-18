import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AllChats from '../screens/Chat/AllChats';
import Chat from '../screens/Chat/Chat';

const ChatStack = createStackNavigator();

export default () => (
  <ChatStack.Navigator>
    <ChatStack.Screen
      name="AllChats"
      component={AllChats}
      options={{headerShown: false}}
    />
    <ChatStack.Screen
      name="Chat"
      component={Chat}
      options={{headerShown: false}}
    />
  </ChatStack.Navigator>
);
