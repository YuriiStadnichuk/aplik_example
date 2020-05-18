import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import {Avatar, Icon} from 'react-native-elements';
import DefaultInput from '../../../components/inputs/DefaultInput';

import {icons, colors, images} from '../../../constants';

import styles from './styles';

class WatchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'https://www.dropbox.com/s/6rvqidmk5m0h4hp/Skyrim.mp4?dl=0',
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <LinearGradient
          style={styles.gradientStyle}
          colors={[colors.VIDEO_GRADIENT_START, colors.VIDEO_GRADIENT_END]}
        />
        <View style={styles.videoContainer}>
          <Video
            repeat
            resizeMode="cover"
            source={require('../../../assets/videos/Skyrim.mp4')}
            ref={ref => {
              this.player = ref;
            }}
            style={styles.backgroundVideo}
          />
        </View>
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
              name="star"
              type="feather"
              containerStyle={{marginBottom: 15}}
            />
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
        </View>
        <View style={styles.bottomBlock}>
          <DefaultInput placeholder="Отправить сообщение" />
        </View>
      </View>
    );
  }
}

export default WatchVideo;
