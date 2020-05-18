import React from 'react';
import {View, Text, TextComponent, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

import styles from './styles';
import {globalStyles, icons} from '../../../constants';

const ProfileAvatarChange = ({...props}) => (
  <View style={styles.container}>
    <View>
      <Avatar rounded size={78} source={{uri: props.avatarUri}} />
      <TouchableOpacity style={styles.photoIconContainer}>
        <icons.Photo />
      </TouchableOpacity>
    </View>
  </View>
);

export default ProfileAvatarChange;
