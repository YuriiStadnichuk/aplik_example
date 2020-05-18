import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {colors, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  gradientStyle: {
    height: hp('14%'),
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4.8%'),
    paddingTop: hp('5.6%'),
    justifyContent: 'space-between',
    width: '100%',
  },
  headerLeft: {
    alignItems: 'flex-start',
    flex: 1,
  },
  headerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 9,
  },
  headerCenterText: {
    fontFamily: fonts.SF_UI_Semibold,
    lineHeight: 27,
    fontSize: windowWidth <= 400 ? 20 : 23,
    color: colors.HEADER_TEXT_COLOR,
  },
  headerRight: {
    alignItems: 'flex-end',
    flex: 1,
  },
});
