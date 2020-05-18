import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const ProfileButton = ({...props}) => (
  <TouchableOpacity onPress={props.onPress} style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.leftIconContainer}>{props.leftItem}</View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
    <View style={styles.rightContainer}>{props.rightItem}</View>
  </TouchableOpacity>
);

export default ProfileButton;
