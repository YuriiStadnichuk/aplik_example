import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {colors} from '../../../constants';

const windowHeight = Dimensions.get('window').height;

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.warn(Dimensions.get('window').height);
    const {...props} = this.props;
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientStyle}
        colors={[colors.HEADER_GRADIENT_START, colors.HEADER_GRADIENT_END]}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>{props.headerLeft}</View>
          <View style={styles.headerCenter}>
            <Text style={styles.headerCenterText}>{props.headerCenter}</Text>
          </View>
          <View style={styles.headerRight}>{props.headerRight}</View>
        </View>
      </LinearGradient>
    );
  }
}

export default DefaultHeader;
