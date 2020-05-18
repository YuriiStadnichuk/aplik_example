import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

import styles from './styles';
import {globalStyles, colors} from '../../../constants';

const ChatItem = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.leftIconContainer}>
        <Avatar rounded size={40} source={item.image} />
        <Icon
          name="checkbox-blank-circle"
          type="material-community"
          size={14}
          color={colors.ERROR_RED}
          containerStyle={{
            position: 'absolute',
            top: -2,
            right: -2,
          }}
        />
      </View>
      <View style={styles.centerContainer}>
        <Text style={globalStyles.SFR_16_Gray}>{item.name}</Text>
        <Text
          numberOfLines={1}
          style={[globalStyles.SFR_12_Light, {width: '40%'}]}>
          {item.lastMessage}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ChatItem;
