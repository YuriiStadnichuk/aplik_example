import React from 'react';
import {Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {globalStyles, colors} from '../../../constants';

const MessageItem = ({item}) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={item.sender === 1 ? styles.messageIncome : styles.messageOutcome}
    colors={
      item.sender === 1
        ? [
            colors.INCOME_MESSAGE_GRADIENT_START,
            colors.INCOME_MESSAGE_GRADIENT_END,
          ]
        : [
            colors.OUTCOME_MESSAGE_GRADIENT_END,
            colors.OUTCOME_MESSAGE_GRADIENT_START,
          ]
    }>
    <Text style={globalStyles.SFR_16_White}>{item.message}</Text>
    <Text style={styles.timeText}>{item.time}</Text>
  </LinearGradient>
);

export default MessageItem;
