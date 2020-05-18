import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 15,
    paddingHorizontal: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    paddingVertical: hp('6.3%'),
  },
  buttonsBlock: {
    paddingHorizontal: '11%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
