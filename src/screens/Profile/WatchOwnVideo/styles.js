import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  gradientStyle: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  topBlock: {
    paddingTop: hp('5%'),
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  middleBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomBlock: {
    paddingHorizontal: '10.9%',
    marginBottom: hp('3.35%'),
    position: 'absolute',
    zIndex: 2,
    left: 0,
    bottom: 0,
    right: 0,
  },
  avatarBlock: {
    flexDirection: 'row',
  },
  nameText: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 18,
    lineHeight: 21,
    color: 'white',
  },
  professionText: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
  },
  likeContainer: {
    position: 'absolute',
    right: '7%',
    bottom: '16%',
  },
});
