import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import DefaultButton from '../../../components/buttons/DefaultButton';

import {globalStyles, icons} from '../../../constants';
import styles from './styles';

class VideoInTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    const {days} = this.props.route.params;
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter={days === 7 ? 'ТОП на 7 дней' : 'ТОП на 14 дней'}
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
                Ваше видео благополуно размещено в ТОП на {days} дней
              </Text>
              <icons.Done />
            </View>
            <DefaultButton
              title="Готово"
              titleStyle={{color: 'white'}}
              onPress={() => navigation.navigate('PromotionVideo')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default VideoInTop;
