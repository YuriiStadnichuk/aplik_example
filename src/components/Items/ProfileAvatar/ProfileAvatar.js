import React from 'react';
import {View, Text, TextComponent, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

import styles from './styles';
import {globalStyles} from '../../../constants';

const ProfileAvatar = ({...props}) => (
  <View style={styles.container}>
    <Avatar
      onPress={props.onPress}
      rounded
      size={78}
      source={{uri: props.avatarUri}}
      containerStyle={props.choose === true ? styles.chooseContainer : null}
    />
    <Text style={[globalStyles.SFR_16_Gray, {marginTop: 10}]}>
      {props.name} / {props.profession}
    </Text>
  </View>
);

export default ProfileAvatar;
