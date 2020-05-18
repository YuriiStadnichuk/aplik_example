import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';

export default StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 325,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  imageStyle: {
    resizeMode: 'cover',
    width: 200,
    height: 325,
    borderRadius: 5,
  },
  nameText: {
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 14,
    lineHeight: 17,
    color: colors.ITEM_TEXT_GRAY,
  },
  professionText: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 14,
    lineHeight: 17,
    color: colors.LIGHT_TEXT,
  },
});
