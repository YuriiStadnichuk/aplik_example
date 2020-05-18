import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBlock: {
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    paddingHorizontal: 35,
    height: 130,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
  },
  titleText: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: screenWidth <= 360 ? 25 : 30,
    color: colors.WHITE_TEXT,
    flex: 9,
    textAlign: 'center',
    paddingRight: 35,
  },
  divider: {
    borderWidth: 1,
    width: 76,
    borderColor: colors.BUTTON_GRADIENT_START,
  },
});
