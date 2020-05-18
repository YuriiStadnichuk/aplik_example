import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import setUserTypeEmp from '../../../api/apiFetchers/setUserTypeEmp/setUserTypeEmp'
import setUserTypeApp from '../../../api/apiFetchers/setUserTypeApp/setUserTypeApp'
import DefaultButton from '../../../components/buttons/DefaultButton';
import styles from './styles';
import images from '../../../constants/images';
import colors from '../../../constants/colors';

class ChooseTypeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const userType = 1

    if (userType === 1)
      this.props.navigation.navigate('Profile', {
        typeProfile: 'employee',
      })
    else if (userType === 2)
    this.props.navigation.navigate('Profile', {
      typeProfile: 'employer'
    })

    const { getProfileInfo } = this.props;
    getProfileInfo();
  }

  render() {
    const {token, navigation} = this.props
  
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={images.backgroundThree}
          style={{width: '100%', height: '100%'}}>
          <LinearGradient
            style={{height: '100%', width: '100%'}}
            colors={[colors.MAIN_GRADIENT_START, colors.MAIN_GRADIENT_END]}>
            <View style={styles.container}>
              <DefaultButton
                onPress={() =>  {
                  this.props.navigation.navigate('Profile', {
                    typeProfile: 'employee',
                  }),
                  setUserTypeApp(token)
                }}
                title={'Продолжить как соискатель'}
              />
              <DefaultButton
                onPress={() => { 
                  this.props.navigation.navigate('Profile', {
                    typeProfile: 'employer',
                  }),
                  setUserTypeEmp(token)
                }}
                title={'Продолжить как работодатель'}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default ChooseTypeProfile;
