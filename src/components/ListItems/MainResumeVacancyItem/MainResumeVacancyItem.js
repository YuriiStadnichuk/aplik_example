import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './styles';

const MainResumeVacancyItem = ({item, index, onPress}) => (
  <View
    style={
      index === 0
        ? {marginLeft: wp('8.45%'), marginRight: 5}
        : {marginHorizontal: 5}
    }>
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image
        width={200}
        height={325}
        style={styles.imageStyle}
        source={item.image}
      />
    </TouchableOpacity>
    <Text style={styles.nameText}>{item.name}</Text>
    <Text style={styles.professionText}>{item.profession}</Text>
  </View>
);

export default MainResumeVacancyItem;
