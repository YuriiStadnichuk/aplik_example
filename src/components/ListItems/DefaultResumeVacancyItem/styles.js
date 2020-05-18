import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {colors, fonts} from '../../../constants';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  imageContainer: {
    width: windowWidth * 0.464,
    height: 325,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  imageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: 325,
    borderRadius: 5,
  },
  nameText: {
    fontFamily: fonts.SF_UI_Regular,
    fontSize: 14,
    lineHeight: 17,
    color: colors.ITEM_TEXT_GRAY,
  },
  professionText: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 14,
    lineHeight: 17,
    color: colors.LIGHT_TEXT,
  },
  likeContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
