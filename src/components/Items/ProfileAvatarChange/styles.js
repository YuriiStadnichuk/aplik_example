import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_GRAY,
    paddingTop: 50,
    paddingBottom: 50,
  },
  photoIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
