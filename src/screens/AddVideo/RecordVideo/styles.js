import {StyleSheet} from 'react-native';
import {fonts} from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  buttonsContainer: {
    position: 'absolute',
    zIndex: 5,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 35,
    left: 0,
    right: 0,
  },
  bottomButtonsBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  recordingButton: {
    marginHorizontal: '15%',
  },
  countDown: {
    textAlign: 'center',
    marginTop: 50,
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
  },
  X: {
    position: 'absolute',
    top: '7%',
    right: '6%',
    zIndex: 2,
  },
  repeatIcon: {
    alignSelf: 'center',
    top: '50%',
  },
  bottomText: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 14,
    lineHeight: 17,
    color: 'white',
  },
});
