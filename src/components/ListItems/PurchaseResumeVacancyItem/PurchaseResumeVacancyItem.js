import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Icon} from 'react-native-elements';
import {colors, globalStyles, icons} from '../../../constants';

const PurchaseResumeVacancyItem = ({item, onPress}) => (
  <View style={{marginBottom: 15}}>
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image
        width="100%"
        height={325}
        style={styles.imageStyle}
        source={item.image}
      />
      {item.top === 1 ? (
        <icons.PremiumOneActive style={styles.premiumIcon} />
      ) : item.top === 2 ? (
        <icons.PremiumTwoActive style={styles.premiumIcon} />
      ) : (
        <icons.PremiumThreeActive style={styles.premiumIcon} />
      )}
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
    <View style={styles.dataContainer}>
      <Text style={styles.nameText}>
        {item.top === 1
          ? 'ТОП на 7 дней'
          : item.top === 2
          ? 'ТОП на 14 дней'
          : 'ТОП на 30 дней'}
      </Text>
      <Text style={globalStyles.SFR_10_Gray}>
        с {item.topFrom} до {item.topTo}
      </Text>
    </View>

    <Text style={styles.professionText}>
      {item.top === 1 ? '100 грн' : item.top === 2 ? '200 грн' : '300 грн'}
    </Text>
  </View>
);

export default PurchaseResumeVacancyItem;
