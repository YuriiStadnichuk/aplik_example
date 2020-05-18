import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Icon} from 'react-native-elements';
import {colors, globalStyles} from '../../../constants';

const DefaultResumeVacancyItem = ({item, index, onPress}) => (
  <View style={{marginBottom: 15}}>
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image
        width="100%"
        height={325}
        style={styles.imageStyle}
        source={item.image}
      />
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
            {textAlignVertical: 'bottom', marginLeft: 4},
          ]}>
          {item.likes}
        </Text>
      </View>
    </TouchableOpacity>
    <Text style={styles.nameText}>{item.name}</Text>
    <Text style={styles.professionText}>{item.profession}</Text>
  </View>
);

export default DefaultResumeVacancyItem;
