import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import DefaultButton from '../../../components/buttons/DefaultButton';
import styles from './styles';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

class LogReg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    this.props.navigation.navigate('LogIn')
    this.props.navigation.goBack()
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundOne}
          style={{width: '100%', height: '100%'}}>
          <LinearGradient
            style={{height: '100%', width: '100%'}}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <View style={styles.container}>
              <DefaultButton
                onPress={() => this.props.navigation.navigate('LogIn')}
                title={'Войти'}
              />
              <DefaultButton
                onPress={() => this.props.navigation.navigate('Registration')}
                title={'Зарегистироваться'}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default LogReg;
