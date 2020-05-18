import React from 'react';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../constants/colors';
import styles from './styles';

const DefaultButton = ({...props}) => (
  <Button
    ViewComponent={LinearGradient}
    linearGradientProps={{
      colors: [colors.BUTTON_GRADIENT_START, colors.BUTTON_GRADIENT_END],
      start: {x: 0, y: 0},
      end: {x: 1, y: 0},
    }}
    {...props}
    titleStyle={[styles.titleStyle, props.titleStyle]}
    containerStyle={[styles.containerStyle, props.containerStyle]}
    buttonStyle={styles.buttonStyle}
  />
);

export default DefaultButton;
