import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_GRAY,
    paddingTop: 50,
    paddingBottom: 25,
  },
  chooseContainer: {
    padding: 2,
    backgroundColor: colors.BUTTON_GRADIENT_START,
  },
});
