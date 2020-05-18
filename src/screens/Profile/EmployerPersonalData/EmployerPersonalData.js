import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import DefaultHeader from '../../../components/Headers/DefaultHeader';
import {globalStyles, icons, images} from '../../../constants';
import {ProfileAvatarChange, ProfileInput} from '../../../components/Items';

import styles from './styles';

class EmployerPersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter="Персональные данные"
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
            <ProfileAvatarChange
              avatarUri={images.man}
              name="Дмитрий"
              profession="Дизайнер"
            />
            <ProfileInput
              placeholder="Название компании"
              leftItem={<icons.Info />}
            />
            <ProfileInput
              onFocus={() => navigation.navigate('CityChoose')}
              placeholder="Город"
              leftItem={<icons.Pin />}
            />
            <ProfileInput placeholder="Телефон" leftItem={<icons.Phone />} />
            <ProfileInput placeholder="Email" leftItem={<icons.Message />} />

            <ProfileInput placeholder="Сайт" leftItem={<icons.App />} />
            <ProfileInput
              placeholder="Дата создания"
              leftItem={<icons.Calendar />}
            />
            <ProfileInput
              onFocus={() => navigation.navigate('HeadingChoose')}
              placeholder="Сфера деятельности"
              leftItem={<icons.Menu />}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default EmployerPersonalData;
