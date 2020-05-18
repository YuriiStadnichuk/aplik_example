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
    paddingTop: 10,
    fontSize: 16,
    fontFamily: fonts.SF_UI_Medium,
    textAlign: 'center',
    color: colors.WHITE_TEXT,
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
});
