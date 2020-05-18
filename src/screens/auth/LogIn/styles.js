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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 30,
    color: colors.WHITE_TEXT,
    flex: 9,
    textAlign: 'center',
    paddingRight: 35,
  },
  ResPassText: {
    fontSize: 16,
    fontFamily: fonts.SF_UI_Medium,
    textAlign: 'center',
    color: colors.BUTTON_GRADIENT_START,
  },
  noAccText: {
    fontSize: 16,
    fontFamily: fonts.SF_UI_Medium,
    color: colors.WHITE_TEXT,
  },
  bottomTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topBlock: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  middleBlock: {
    justifyContent: 'center',
    flex: 5,
    width: '100%',
  },
  bottomBlock: {
    justifyContent: 'center',
    flex: 2,
    width: '100%',
  },
  divider: {
    //marginTop: 40,
    borderWidth: 1,
    width: 76,
    borderColor: colors.BUTTON_GRADIENT_START,
  },
  errorText: {
    fontSize: 14,
    fontFamily: fonts.SF_UI_Medium,
    textAlign: 'center',
    color: colors.ERROR_RED,
  }
});
