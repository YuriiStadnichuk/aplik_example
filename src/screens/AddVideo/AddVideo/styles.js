import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  topBlock: {
    paddingHorizontal: '8.5%',
    paddingVertical: hp('5.5%'),
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_GRAY,
    justifyContent: 'center',
  },
  middleBlock: {
    justifyContent: 'space-between',
    paddingHorizontal: '8.5%',
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_GRAY,
    paddingVertical: 30,
  },
  bottomBlock: {
    marginTop: 35,
    alignItems: 'center',
    paddingHorizontal: '11%',
  },
  iconContainer: {
    width: 39,
    height: 39,
    marginRight: 20,
    borderWidth: 1,
    borderColor: colors.BORDER_GRAY,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  topText: {
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 20,
    lineHeight: 24,
    color: colors.ITEM_TEXT_GRAY,
  },
});
