import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon, Divider} from 'react-native-elements';

import styles from './styles';

class HeaderAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    const {title} = this.props;

    return (
      <View style={styles.topBlock}>
        <View style={styles.header}>
          <Icon
            underlayColor="transparent"
            name="chevron-thin-left"
            type="entypo"
            size={30}
            color="white"
            onPress={this.onPressBack}
          />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
  }
}

export default HeaderAuth;
