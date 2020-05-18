import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import fonts from './fonts';
import colors from './colors';
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: hp('-2.9%'),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    //paddingBottom: windowHeight <= 700 ? 50 : 80,
  },
  SFR_16_Gray: {
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 16,
    lineHeight: 19,
    color: colors.GRAY_TEXT,
  },
  SFR_16_White: {
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
  },
  SFR_10_Gray: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 10,
    lineHeight: 12,
    color: colors.GRAY_TEXT,
  },
  SFR_12_Gray: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 12,
    lineHeight: 14,
    color: colors.GRAY_TEXT,
  },
  SFR_14_Gray: {
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 14,
    lineHeight: 17,
    color: colors.GRAY_TEXT,
  },
  SFR_12_Light: {
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 12,
    lineHeight: 14,
    color: colors.LIGHT_TEXT,
  },
  SFR_16_Light: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 15,
    lineHeight: 18,
    color: colors.LIGHT_TEXT,
  },
  SFR_20_Gray: {
    fontFamily: fonts.SF_UI_Light,
    fontSize: 20,
    lineHeight: 24,
    color: colors.GRAY_TEXT,
  },
});
