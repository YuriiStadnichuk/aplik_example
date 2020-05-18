import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';

import DefaultHeader from '../../../../components/Headers/DefaultHeader';
import {globalStyles} from '../../../../constants';
import DefaultInput from '../../../../components/inputs/DefaultInput';

import styles from './styles';
import {Icon} from 'react-native-elements';

class FilterAge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter="Возраст"
            headerLeft={
              <Icon
                underlayColor="transparent"
                name="chevron-thin-left"
                type="entypo"
                color="white"
                onPress={() => navigation.goBack()}
              />
            }
            headerRight={
              <Icon
                underlayColor="transparent"
                name="check"
                type="material"
                color="white"
                size={30}
                onPress={() => navigation.goBack()}
              />
            }
          />
          <View style={globalStyles.container}>
            <View style={styles.inputContainer}>
              <DefaultInput placeholder="От" />
              <DefaultInput placeholder="До" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default FilterAge;
