import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import DefaultButton from '../../../components/buttons/DefaultButton';

import {globalStyles, icons} from '../../../constants';
import styles from './styles';

class ChooseFromGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      duration: null,
    };
  }

  openGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
      multiple: false,
    }).then(image => {
      this.setState({item: image});
    });
  };

  onLoad = data => {
    data.duration <= 30
      ? this.props.navigation.navigate('Heading')
      : this.setState({duration: data.duration});
  };

  onPressX = () => {
    this.setState({duration: null, item: null});
  };

  render() {
    const {navigation} = this.props;
    const {item, duration} = this.state;
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        {item === null ? null : (
          <Video paused source={{uri: item.path}} onLoad={this.onLoad} />
        )}
        <DefaultHeader
          headerCenter={duration !== null ? 'Проверка видео' : 'Ваше видео'}
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
          <View style={styles.emptyContainer}>
            <View style={styles.topBlock}>
              <Text style={styles.topText}>
                {duration !== null && duration > 30
                  ? 'Ваше видео превышает допустимые 30 секунд! Перезапишите или выбирете другое'
                  : 'Выбрать video из галлереи'}
              </Text>
              {duration !== null && duration > 30 ? (
                <icons.ErrorLarge onPress={this.onPressX} />
              ) : (
                <icons.PictureBig onPress={this.openGallery} />
              )}
            </View>
            <View style={styles.bottomBlock}>
              <DefaultButton
                title="Записать video"
                titleStyle={{color: 'white'}}
                onPress={() => navigation.navigate('RecordVideo')}
              />
              <Text style={globalStyles.SFR_16_Gray}>
                максимальная длительность{' '}
                <Text style={globalStyles.SFR_16_Light}>30 сек.</Text>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default ChooseFromGallery;
