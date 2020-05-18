import React, {Component} from 'react';
import {View, StatusBar, Text, Image, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import Video from 'react-native-video';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import DefaultButton from '../../../components/buttons/DefaultButton';
import HeadingItem from '../../../components/ListItems/HeadingItem';

import staticData from '../../../constants/staticData';
import {globalStyles, images} from '../../../constants';
import styles from './styles';

class YourVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation, cv, categories} = this.props;
    console.log(cv)
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter="Ваше видео"
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
          <Text style={[globalStyles.SFR_16_Gray, styles.topText]}>
            Ваше video вакансии
          </Text>
          <Video
            paused={false}
            resizeMode="cover"
            source={{ uri: cv.video.uri }}
            ref={ref => {
              this.player = ref;
            }}
            style={styles.imageStyle}
          />
          <View style={{paddingHorizontal: '11%'}}>
            <HeadingItem
              containerStyle={{borderBottomWidth: 0, paddingLeft: 0}}
              item={staticData.headingList[0]}
            />
            <DefaultButton
              title="Опубликовать"
              titleStyle={{color: 'white'}}
              onPress={() => navigation.navigate('AddVideoPromotion')}
              containerStyle={{marginTop: 0}}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default YourVideo;
