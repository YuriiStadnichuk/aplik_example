import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

export default StyleSheet.create({
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 45,
    borderColor: colors.BUTTON_GRADIENT_START,
    height: 45,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  focusedContainerStyle: {
    borderWidth: 1,
    borderRadius: 45,
    borderColor: colors.BUTTON_GRADIENT_END,
    height: 45,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  errorContainerStyle: {
    borderWidth: 1,
    borderRadius: 45,
    borderColor: colors.ERROR_RED,
    height: 45,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  errorInputStyle: {
    padding: 0,
    fontSize: 16,
    fontFamily: fonts.SF_UI_Medium,
    color: colors.ERROR_RED,
  },
  inputStyle: {
    padding: 0,
    fontSize: 16,
    fontFamily: fonts.SF_UI_Medium,
    color: colors.BUTTON_GRADIENT_START,
  },
});
