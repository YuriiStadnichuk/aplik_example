import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import DefaultButton from '../../../components/buttons/DefaultButton';

import {globalStyles, icons} from '../../../constants';
import styles from './styles';

class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter="Проверка видео"
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
            <View style={styles.topBlock}>
              <Text
                style={[
                  globalStyles.SFR_20_Gray,
                  {textAlign: 'center', marginBottom: 20},
                ]}>
                Поздравляем вас с первым video. В ближайшее время мы его
                опубликуем.
              </Text>
              <icons.Done />
            </View>
            <DefaultButton
              title="На главную"
              titleStyle={{color: 'white'}}
              onPress={() => navigation.navigate('MainStack')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Done;
