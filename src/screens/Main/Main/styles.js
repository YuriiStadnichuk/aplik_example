import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  topBlock: {
    paddingLeft: 5,
  },
  listContainer: {
    flex: 1,
    marginBottom: hp('2.8%'),
  },
  listTopBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: wp('4.8%'),
    paddingLeft: wp('8.45%'),
    marginBottom: 15,
  },
});
