import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Input} from 'react-native-elements';

const ProfileInput = ({...props}) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.leftIconContainer}>{props.leftItem}</View>
      <View style={styles.centerContainer}>
        <Input
          onFocus={props.onFocus}
          disabledInputStyle={styles.inputStyle}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          inputContainerStyle={{borderBottomWidth: 0}}
          containerStyle={{paddingLeft: 0}}
          style={{paddingLeft: 0}}
          inputStyle={styles.inputStyle}
        />
      </View>
    </View>
  </View>
);

export default ProfileInput;
