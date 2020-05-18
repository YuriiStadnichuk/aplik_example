import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const HorizontalHeadingItem = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.iconContainer}>{item.icon}</View>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

export default HorizontalHeadingItem;
