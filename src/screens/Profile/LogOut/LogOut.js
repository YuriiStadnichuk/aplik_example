import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';

import DefaultButton from '../../../components/buttons/DefaultButton';

import { globalStyles } from '../../../constants';

import styles from './styles';

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressLogout = () => {
    this.props.navigation.navigate('MainStack')
    this.props.onLogout()
  };

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter="Выход"
          headerLeft={
            <Icon
              underlayColor="transparent"
              name="chevron-thin-left"
              type="entypo"
              color="white"
              onPress={() => navigation.goBack()}
            />
          }
        />
        <View style={globalStyles.container}>
          <View style={styles.emptyContainer}>
            <Text style={globalStyles.SFR_20_Gray}>Вы точно хотите выйти?</Text>
            <View style={styles.bottomBlock}>
              <DefaultButton
                title="Выйти"
                titleStyle={{ color: 'white' }}
                onPress={()=> {
                  navigation.navigate('LogReg'),
                  this.props.onLogout()
                }}
              />
              <DefaultButton
                title="Отмена"
                titleStyle={{ color: 'white' }}
                onPress={() => navigation.navigate('Profile')}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default LogOut;
