import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  topText: {
    textAlign: 'center',
    marginTop: hp('5.6%'),
  },
  bottomBlock: {
    width: '100%',
  },
  emptyContainer: {
    paddingHorizontal: '11%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: hp('15.6%'),
  },
  imageStyle: {
    width: '65%',
    height: hp('50%'),
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    resizeMode: 'cover',
  },
});
