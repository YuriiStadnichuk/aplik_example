import React, {Component} from 'react';
import {View, StatusBar, FlatList, Text} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import DefaultButton from '../../../components/buttons/DefaultButton';

import {globalStyles} from '../../../constants';
import styles from './styles';

class VideoInTopDone extends Component {
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
          <View style={styles.listContainer}>
            <View style={styles.emptyContainer}>
              <Text style={[globalStyles.SFR_20_Gray, {textAlign: 'center'}]}>
                Ваше видео будем размещено в топ на {days} дней и его будут
                видеть больше пользователей
              </Text>
              <DefaultButton
                title="Купить"
                titleStyle={{color: 'white'}}
                onPress={() =>
                  navigation.navigate('VideoInTopDone', {days: days})
                }
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default VideoInTopDone;
