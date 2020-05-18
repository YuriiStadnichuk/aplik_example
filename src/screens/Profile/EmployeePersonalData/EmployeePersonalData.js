import React, { Component } from 'react';
import { View, StatusBar, Text, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';
import DefaultHeader from '../../../components/Headers/DefaultHeader';
import { globalStyles, icons, images } from '../../../constants';
import { ProfileAvatarChange, ProfileInput } from '../../../components/Items';

import styles from './styles';

class EmployeePersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: true, 
      phone: '23480'
    };
  }

  componentDidMount() {
    const { getProfileInfo } = this.props;
    getProfileInfo();
  }

  render() {
    const { navigation, user, name } = this.props;
    const { choose, phone } = this.state
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
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
            headerRight={
              choose === true ? (
                <Icon
                  underlayColor="transparent"
                  name="check"
                  type="material"
                  color="white"
                  size={30}
                  onPress={() => this.setState({choose: false})}
                />
              ) : null
            }
          />
          <View style={globalStyles.container}>
            <ProfileAvatarChange
              avatarUri={images.man}
              name="Van"
              profession="Разработчик"
            />
            <ProfileInput
              placeholder={name}
              leftItem={<icons.Person />}
            />
            <ProfileInput
              onFocus={() => navigation.navigate('CityChoose')}
              placeholder="Город"
              leftItem={<icons.Pin />}
            />
            <ProfileInput
              placeholder={phone}
              leftItem={<icons.Phone />}
              value={phone}
              onChangeText={text => this.setState({phone: text})}
            />
            <ProfileInput
              placeholder={user.email}
              leftItem={<icons.Message />}
            />
            <ProfileInput
              onFocus={() => navigation.navigate('ProfessionChoose')}
              placeholder='Проффесия'
              leftItem={<icons.Menu />}
            />
            <ProfileInput
              onFocus={() => navigation.navigate('QualificationChoose')}
              placeholder='Уровень квалификации'
              leftItem={<icons.Graph />}
            />
            <ProfileInput
              placeholder={user.profile.experience}
              leftItem={<icons.Experience />}
            />
            <ProfileInput
              placeholder={user.profile.tools}
              leftItem={<icons.App />}
            />
            <ProfileInput
              placeholder={user.profile.languages}
              leftItem={<icons.World />}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default EmployeePersonalData;
