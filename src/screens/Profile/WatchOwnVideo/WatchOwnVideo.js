import React, {Component} from 'react';
import {View, StatusBar, Text, RefreshControl} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Avatar, Icon} from 'react-native-elements';
import DefaultButton from '../../../components/buttons/DefaultButton';

import {globalStyles, icons, colors, images} from '../../../constants';
import staticData from '../../../constants/staticData';
import styles from './styles';

class WatchOwnVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    const {navigation, uri} = this.props;
    const {listOf} = this.props.route.params;
    console.log(uri)
    return (
      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        scrollEnabled={false}
        enableOnAndroid={true}
        contentContainerStyle={{minHeight: '100%'}}>
        <StatusBar backgroundColor="transparent" translucent />
        <LinearGradient
          style={styles.gradientStyle}
          colors={
            listOf === 'active'
              ? [colors.VIDEO_GRADIENT_START, colors.VIDEO_GRADIENT_END]
              : [
                  colors.INACTIVE_VIDEO_GRADIENT_START,
                  colors.INACTIVE_VIDEO_GRADIENT_END,
                ]
          }
        />
        <Video
          repeat
          resizeMode="cover"
          source={uri}
          // source={{
          //   uri:
          //     'https://r2---sn-c03oxu-jfje.googlevideo.com/videoplayback?expire=1584030689&ei=gQ9qXuklyYGTBrnDnZgF&ip=168.235.86.86&id=o-AH3kUlUaDy03LC8tfQhPriF39_gKgl55Ndlex2cDT07a&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=37.685&lmt=1576953205199246&fvip=2&fexp=23842630,23882514&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ADKhkGMwRQIhAK8Sc4YBndTIZGwPuU9fBPjgM2DgzoBcFGbntGfr3C7yAiA_fZLQynRiCawCNVRXVreWrYuM5tkhrf8uUoaEWHkBhw%3D%3D&redirect_counter=1&rm=sn-a5mky7d&req_id=9dfb5afea699a3ee&cms_redirect=yes&ipbypass=yes&mip=188.191.238.154&mm=31&mn=sn-c03oxu-jfje&ms=au&mt=1584009109&mv=m&mvi=1&pl=24&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=ABSNjpQwRQIgOZwLsn68LEixW-kGuWpWnK62P6NceBAL0w4nJcOkxUcCIQDMvas3LN8T83OaqV_xU_FNHPMWvoy8lmT3QfQzhL8i_g%3D%3D',
          // }}
          ref={ref => {
            this.player = ref;
          }}
          style={styles.backgroundVideo}
        />
        <View style={styles.container}>
          <View style={styles.topBlock}>
            <View style={styles.avatarBlock}>
              <View style={{alignItems: 'center'}}>
                <Avatar
                  source={images.backgroundOne}
                  size={40}
                  rounded
                  containerStyle={{marginBottom: 7}}
                />
                <icons.PremiumOne />
              </View>
              <View style={{marginLeft: 6}}>
                <Text style={styles.nameText}>Лилу Далас</Text>
                <Text style={styles.professionText}>маркетолог</Text>
              </View>
            </View>
            <icons.ThinX onPress={() => navigation.goBack()} />
          </View>

          <View style={styles.middleBlock}>
            <icons.VideoLeft />
            <icons.VideoRight />
          </View>
          <View style={styles.likeContainer}>
            <Icon
              size={38}
              color={colors.INACTIVE_ICON}
              name="thumbs-up"
              type="feather"
              containerStyle={{marginBottom: 15}}
            />
            <Icon
              size={38}
              color={colors.INACTIVE_ICON}
              name="thumbs-down"
              type="feather"
              containerStyle={{marginBottom: 15}}
            />
          </View>
          <View style={styles.bottomBlock}>
            <DefaultButton
              title={listOf === 'active' ? 'Продвигать' : 'Активировать'}
              onPress={
                listOf === 'active'
                  ? () => navigation.navigate('PromotionVideo')
                  : null
              }
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default WatchOwnVideo;
