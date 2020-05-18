import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

export default StyleSheet.create({
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 22,
    borderColor: colors.BUTTON_GRADIENT_START,
    minHeight: 45,
    maxHeight: 200,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  focusedContainerStyle: {
    borderWidth: 1,
    borderRadius: 22,
    borderColor: colors.BUTTON_GRADIENT_END,
    minHeight: 45,
    maxHeight: 200,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  inputStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 18,
    lineHeight: 24,
    fontFamily: fonts.SF_UI_Regular,
    color: colors.GRAY_TEXT,
    //textAlignVertical: 'top',
  },
});
