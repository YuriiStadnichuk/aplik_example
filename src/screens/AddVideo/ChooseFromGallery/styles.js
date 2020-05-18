import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts, colors} from '../../../constants';

export default StyleSheet.create({
  emptyContainer: {
    paddingHorizontal: '11%',
    justifyContent: 'space-between',
    flex: 1,

    paddingTop: hp('16.2%'),
  },
  topBlock: {
    alignItems: 'center',
  },

  topText: {
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 20,
    lineHeight: 24,
    color: colors.GRAY_TEXT,
    textAlign: 'center',
    marginBottom: hp('6.14%'),
  },

  bottomBlock: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
});
