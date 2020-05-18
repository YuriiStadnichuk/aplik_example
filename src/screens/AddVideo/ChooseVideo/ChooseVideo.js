import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import {Icon} from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import DefaultButton from '../../../components/buttons/DefaultButton';

import {globalStyles, icons} from '../../../constants';
import styles from './styles';

class ChooseVideo extends Component {
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
          <View style={styles.bottomBlock}>
            <DefaultButton
              title="Выбрать video"
              titleStyle={{color: 'white'}}
              onPress={() => navigation.navigate('RecordVideo')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default ChooseVideo;
