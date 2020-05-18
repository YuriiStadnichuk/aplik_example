import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DefaultButton from '../../../components/buttons/DefaultButton';
import DefaultInput from '../../../components/inputs/DefaultInput';
import HeaderAuth from '../../../components/Headers/HeaderAuth';

import FetchReg from '../../../api/apiFetchers/Registration/FetchReg'

import styles from './styles';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iAgree: false,
      nameInputError: null,
      passwordInputError: null,
      name: '',
      email: '',
      password: '',
      data: {
        email: null,
        password: null
      }
    };
  }

  onChangeState = (name, value) => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        [name]: value,
      },
    });
  };

  _onPressIAgree = () => {
    this.setState({ iAgree: !this.state.iAgree });
  };

  changeText = value => {
    this.setState({ name: value });
    this.validation(value);
  };

  // validation = value => {
  //   const { name } = this.state;
  //   value.length <= 2
  //     ? this.setState({ nameInputError: true })
  //     : this.setState({ nameInputError: false });
  //   console.warn(this.state.name);
  // };

  render() {
    const {
      iAgree,
      nameInputError,
      passwordInputError,
      email,
      name,
      password,
      data
    } = this.state;
    const { navigation, handlePressSignIn } = this.props;

    handlePressSignIn(data)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundTwo}
          style={{ width: '100%', height: '100%' }}>
          <LinearGradient
            style={{ height: '100%', width: '100%' }}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <HeaderAuth
              navigation={this.props.navigation}
              title={'Регистрация'}
            />
            <KeyboardAwareScrollView
              scrollEnabled={true}
              enableOnAndroid={true}
              contentContainerStyle={{ flexGrow: 1 }}>
              <View style={styles.container}>
                <View style={styles.middleBlock}>
                  {nameInputError ? (
                    <Text style={styles.errorText}>
                      Имя не может состоять из 1 буквы
                    </Text>
                  ) : null}

                  {passwordInputError ? (
                    <Text style={styles.errorText}>
                      Пароль должен состоять минимум из 8 символов
                    </Text>
                  ) : null}

                  <DefaultInput
                    placeholder={'Email'}
                    value={email}
                    onChangeText={email => { 
                      this.setState({ email }), 
                      this.onChangeState('email', email)
                    }}
                  />
                  <DefaultInput
                    // _onChangeText={value => this.changeText(value)}
                    error={nameInputError}
                    placeholder={'Логин или имя'}
                    value={name}
                    onChangeText={name => this.setState({ name })}
                  />
                  <DefaultInput
                    secureTextEntry={true}
                    placeholder={'Пароль'}
                    error={passwordInputError}
                    value={password}
                    onChangeText={password => {
                      this.setState({ password }), 
                      this.onChangeState('password', password)
                    }}
                  />

                  <View style={styles.bottomTextView}>
                    <CheckBox
                      onPress={this._onPressIAgree}
                      checked={iAgree}
                      containerStyle={{ paddingHorizontal: 0 }}
                      size={20}
                      uncheckedColor={colors.BUTTON_GRADIENT_START}
                      checkedColor={colors.BUTTON_GRADIENT_START}
                    />
                    <Text style={styles.noAccText}>Я принимаю </Text>
                    <TouchableOpacity>
                      <Text style={styles.ResPassText}>условия соглашения</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.bottomBlock}>
                  <DefaultButton
                    onPress={() => {
                      if (this.state.name.length <= 1)
                        this.setState({ nameInputError: true })
                      else if (this.state.name.length > 1)
                        this.setState({ nameInputError: false })

                      if (this.state.password.length <= 8)
                        this.setState({ passwordInputError: true })
                      else if (this.state.password.length > 8)
                        this.setState({ passwordInputError: false })

                      if (this.state.nameInputError === false
                        && this.state.passwordInputError === false
                        && iAgree === true) {
                        FetchReg(this.state.email, this.state.password),
                          navigation.navigate('RegistrationComplete')
                      }
                    }
                  }
                    title={'Зарегистрироваться'}

                  />
                  <View style={styles.bottomTextView}>
                    <Text style={styles.noAccText}>У меня уже есть </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('LogIn')}>
                      <Text style={styles.ResPassText}>аккаунт</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default Registration;
