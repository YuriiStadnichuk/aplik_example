import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Video from 'react-native-video';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { colors, globalStyles } from '../../../constants';

const MyResumeVacancyItem = ({ item, onPress, listOf }) => (
  <View style={{ marginBottom: 50 }}>
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image
        width="100%"
        height={325}
        style={styles.imageStyle}
        source={item.image}
      />
      <Video
        paused={false}
        resizeMode="cover"
        source={{ uri: item.video.uri }}
        ref={ref => {
          this.player = ref;
        }}
        style={styles.imageStyle}
      />
      {listOf === 'inactive' ? <View style={styles.inactiveContainer} /> : null}

      <View style={styles.likeContainer}>
        <Icon
          name="thumbs-up"
          type="feather"
          size={18}
          color={colors.GRAY_TEXT}
        />
        <Text
          style={[
            globalStyles.SFR_10_Gray,
            { textAlignVertical: 'bottom', marginLeft: 4 },
          ]}>
          {item.likes}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default MyResumeVacancyItem;
