import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import DefaultButton from '../../../components/buttons/DefaultButton';
import DefaultInput from '../../../components/inputs/DefaultInput';
import HeaderAuth from '../../../components/Headers/HeaderAuth';

import styles from './styles';
import images from '../../../constants/images';
import colors from '../../../constants/colors';
class RestorePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundTwo}
          style={{width: '100%', height: '100%'}}>
          <LinearGradient
            style={{height: '100%', width: '100%'}}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <HeaderAuth
              navigation={this.props.navigation}
              title={'Восстановление'}
            />
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.container}>
                <View style={styles.middleBlock}>
                  <DefaultInput placeholder={'Email или телефон'} />
                  <Text style={styles.ResPassText}>
                    Укажите адрес электронной почты или номер телефона, мы
                    вышлем вам новый пароль
                  </Text>
                </View>
                <View style={styles.bottomBlock}>
                  <DefaultButton
                    onPress={() =>
                      this.props.navigation.navigate('RestoreStepTwo')
                    }
                    title={'Отправить'}
                  />
                </View>
              </View>
            </KeyboardAwareScrollView>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default RestorePassword;
