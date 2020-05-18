import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  containerStyle: {
    marginVertical: 10,
    width: '100%',
  },
  buttonStyle: {
    height: 45,
    borderRadius: 45,
  },
  titleStyle: {
    fontSize: windowWidth <= 420 ? 17 : 20,
    color: colors.BLACK_TEXT,
    fontFamily: fonts.SF_UI_Medium,
  },
});
