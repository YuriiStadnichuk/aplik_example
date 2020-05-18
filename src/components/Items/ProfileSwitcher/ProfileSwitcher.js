import React from 'react';
import {View, Text, TextComponent, TouchableOpacity} from 'react-native';

import styles from './styles';

const ProfileSwitcher = ({...props}) => (
  <TouchableOpacity style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.leftIconContainer}>{props.leftItem}</View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.rightText}>{props.rightText}</Text>
    </View>
  </TouchableOpacity>
);

export default ProfileSwitcher;
