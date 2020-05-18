import React, {Component} from 'react';
import {View, StatusBar, Text, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon, Avatar} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

import LoadingStatus from '../../../components/LoadingStatus'
import DefaultHeader from '../../../components/Headers/DefaultHeader';
import {globalStyles, icons, colors, images} from '../../../constants';
import {
  ProfileButton,
  ProfileSwitcher,
  ProfileAvatar,
} from '../../../components/Items';

import styles from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      choose: false,
    };
  }

  componentDidMount() {
    const { getProfileInfo } = this.props;
    getProfileInfo();
  }

  onPressAvatar = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      width: 400,
      height: 400,
      cropping: true,
      multiple: false,
      showCropFrame: false,
      showCropGuidelines: false,
      cropperCircleOverlay: true,
    }).then(image => {
      this.setState({image: image, choose: true});
    });
  };

  render() {
    const {navigation, loading} = this.props;
    const {image, choose} = this.state;
    const {typeProfile} = this.props.route.params;

    if (loading) 
      return <LoadingStatus />
      
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          contentContainerStyle={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter="Профиль"
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
            {typeProfile === 'employee' ? (
              <ProfileAvatar
                choose={choose}
                onPress={this.onPressAvatar}
                avatarUri={image !== null ? image.path : images.man}
                name="Дмитрий"
                profession="Дизайнер"
              />
            ) : (
              <ProfileAvatar
                choose={choose}
                onPress={this.onPressAvatar}
                avatarUri={image !== null ? image.path : images.company}
                name="Интерком"
                profession="Менеджмент"
              />
            )}

            <ProfileButton
              onPress={
                typeProfile === 'employee'
                  ? () => navigation.navigate('EmployeePersonalData')
                  : () => navigation.navigate('EmployerPersonalData')
              }
              leftItem={<icons.Info />}
              title="Персональные данные"
              rightItem={
                <Icon
                  name="chevron-thin-right"
                  type="entypo"
                  color={colors.CHEVRON_RIGHT_COLOR}
                  size={18}
                />
              }
            />
            <ProfileButton
              leftItem={<icons.Lock />}
              title="Изменить пароль"
              rightItem={
                <Icon
                  name="chevron-thin-right"
                  type="entypo"
                  color={colors.CHEVRON_RIGHT_COLOR}
                  size={18}
                />
              }
            />
            <ProfileSwitcher
              leftItem={<icons.World />}
              title="Язык"
              rightText="Русский"
            />
            <ProfileSwitcher
              leftItem={<icons.Clock />}
              title="Push уведомления"
              rightText="Выкл"
            />
            <ProfileSwitcher
              leftItem={<icons.Message />}
              title="Email рассылка"
              rightText="Выкл"
            />
            <ProfileButton
              onPress={() => navigation.navigate('PurchaseHistory')}
              leftItem={<icons.Dollar />}
              title="История покупок"
              rightItem={
                <Icon
                  name="chevron-thin-right"
                  type="entypo"
                  color={colors.CHEVRON_RIGHT_COLOR}
                  size={18}
                />
              }
            />
            <ProfileButton
              onPress={() => navigation.navigate('MyVideos')}
              leftItem={<icons.Video />}
              title="Мои видео"
              rightItem={
                <Icon
                  name="chevron-thin-right"
                  type="entypo"
                  color={colors.CHEVRON_RIGHT_COLOR}
                  size={18}
                />
              }
            />
            <ProfileButton
              onPress={() => navigation.navigate('LogOut')}
              leftItem={<icons.X />}
              title="Выйти"
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Profile;
