import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: hp(' 9.5%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '10%',
  },
  leftIconContainer: {
    marginRight: 20,
  },
  centerContainer: {
    width: '100%',
  },
});
