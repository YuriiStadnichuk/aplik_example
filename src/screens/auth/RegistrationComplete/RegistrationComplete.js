import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import DefaultButton from '../../../components/buttons/DefaultButton';

import styles from './styles';
import images from '../../../constants/images';
import icons from '../../../constants/icons';
import colors from '../../../constants/colors';

class RegistrationComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundTwo}
          style={{width: '100%', height: '100%'}}>
          <LinearGradient
            style={{height: '100%', width: '100%'}}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <View style={styles.container}>
              <View style={styles.middleBlock}>
                <Text style={styles.topText}>
                  Ваша регистрация прошла успешно
                </Text>

                <Image source={icons.regComplete} />
                <Text style={styles.middleText}>
                  Чтобы записывать видео-резюме или видео-вакансии, вам
                  необходимо заполнить профиль в личном кабинете
                </Text>
              </View>
              <View style={styles.bottomBlock}>
                <DefaultButton
                  title={'Перейти'}
                  onPress={() => navigation.navigate('Main')}
                />
                <View style={styles.bottomTextView}>
                  <Text style={styles.noAccText}>Заполню профиль </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Main')} >
                    <Text style={styles.ResPassText}>позже</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default RegistrationComplete;
