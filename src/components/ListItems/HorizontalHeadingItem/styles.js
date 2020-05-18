import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {colors, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    paddingVertical: hp('3.35%'),
  },
  iconContainer: {
    width: windowHeight <= 750 ? 60 : 70,
    height: windowHeight <= 750 ? 60 : 70,
    borderWidth: 1,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.BORDER_GRAY,
  },
  title: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: fonts.SF_UI_Semibold,
    color: colors.HEADING_TEXT_COLOR,
  },
});
