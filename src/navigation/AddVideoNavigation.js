import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AddVideo from '../screens/AddVideo/AddVideo';
import RecordVideo from '../screens/AddVideo/RecordVideo';
import Heading from '../screens/AddVideo/Heading';
import Profession from '../screens/AddVideo/Profession';
import YourVideo from '../screens/AddVideo/YourVideo';
import AddVideoPromotion from '../screens/AddVideo/AddVideoPromotion';
import Done from '../screens/AddVideo/Done';
import ChooseFromGallery from '../screens/AddVideo/ChooseFromGallery';
import ChooseVideo from '../screens/AddVideo/ChooseVideo';

const AddVideoStack = createStackNavigator();

export default () => (
  <AddVideoStack.Navigator>
    <AddVideoStack.Screen
      name="AddVideo"
      component={AddVideo}
      options={{headerShown: false}}
    />
    <AddVideoStack.Screen
      name="RecordVideo"
      component={RecordVideo}
      options={{headerShown: false}}
    />
    <AddVideoStack.Screen
      name="ChooseFromGallery"
      component={ChooseFromGallery}
      options={{headerShown: false}}
    />
    <AddVideoStack.Screen
      name="ChooseVideo"
      component={ChooseVideo}
      options={{headerShown: false}}
    />
    <AddVideoStack.Screen
      name="Heading"
      component={Heading}
      options={{headerShown: false}}
    />
    <AddVideoStack.Screen
      name="Profession"
      component={Profession}
      options={{headerShown: false}}
    />
    <AddVideoStack.Screen
      name="YourVideo"
      component={YourVideo}
      options={{headerShown: false}}
    />
    <AddVideoStack.Screen
      name="AddVideoPromotion"
      component={AddVideoPromotion}
      options={{headerShown: false}}
    />
    <AddVideoStack.Screen
      name="Done"
      component={Done}
      options={{headerShown: false}}
    />
  </AddVideoStack.Navigator>
);
