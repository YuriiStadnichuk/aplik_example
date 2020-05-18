import React, {Component} from 'react';
import {View, StatusBar, Text, Image} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import {ProfileButton} from '../../../components/Items';
import DefaultButton from '../../../components/buttons/DefaultButton';
import {globalStyles, icons, colors, images} from '../../../constants';
import styles from './styles';

class AddVideoPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createCv = () => {
    const {navigation, createNewCv} = this.props;

    createNewCv();
    navigation.navigate('Done');
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <StatusBar backgroundColor="transparent" translucent />
          <DefaultHeader
            headerCenter="Продвижение"
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
          <View style={[globalStyles.container, {marginBottom: 65}]}>
            <Image style={styles.imageStyle} source={{uri: images.man}} />
            <ProfileButton
              onPress={() => navigation.navigate('VideoInTop', {days: 7})}
              leftItem={<icons.Dot />}
              title="В ТОП на 7 дней - 300 грн"
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
              onPress={() => navigation.navigate('VideoInTop', {days: 14})}
              leftItem={<icons.TwoDots />}
              title="В ТОП на 14 дней - 600 грн"
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
              leftItem={<Text style={globalStyles.SFR_14_Gray}>14</Text>}
              title="Размещение на 14 дней - 100 грн"
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
              leftItem={<Text style={globalStyles.SFR_14_Gray}>14</Text>}
              title="Размещение на 30 дней - 200 грн"
              rightItem={
                <Icon
                  name="chevron-thin-right"
                  type="entypo"
                  color={colors.CHEVRON_RIGHT_COLOR}
                  size={18}
                />
              }
            />
          </View>
        </KeyboardAwareScrollView>
        <DefaultButton
          title="Пропустить и опубликовать"
          titleStyle={{color: 'white'}}
          onPress={() => this.createCv()}
          containerStyle={styles.button}
        />
      </View>
    );
  }
}

export default AddVideoPromotion;
