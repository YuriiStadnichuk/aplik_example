import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const HeadingItem = ({item, onPress, containerStyle}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, containerStyle]}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.leftIconContainer}>{item.icon}</View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default HeadingItem;
