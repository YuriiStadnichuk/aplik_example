import {StyleSheet} from 'react-native';

import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 45,
    alignItems: 'center',
  },

  ResPassText: {
    fontSize: 16,
    fontFamily: fonts.SF_UI_Medium,
    textAlign: 'center',
    color: colors.BUTTON_GRADIENT_START,
  },
  topText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.SF_UI_Medium,
    color: colors.WHITE_TEXT,
  },
  middleText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.SF_UI_Light,
    color: colors.WHITE_TEXT,
  },
  noAccText: {
    fontSize: 16,
    fontFamily: fonts.SF_UI_Medium,
    color: colors.WHITE_TEXT,
  },
  bottomTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleBlock: {
    paddingTop: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 5,
    width: '100%',
  },
  bottomBlock: {
    justifyContent: 'center',
    flex: 2,
    width: '100%',
  },
});
