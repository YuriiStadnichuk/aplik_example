import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';

export default StyleSheet.create({
  messageIncome: {
    marginRight: '20%',
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginVertical: 2,
  },
  messageOutcome: {
    marginLeft: '20%',
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 12,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginVertical: 2,
  },
  timeText: {
    fontFamily: fonts.SF_UI_Medium,
    fontSize: 10,
    lineHeight: 12,
    color: colors.MESSAGE_TIME,
    textAlignVertical: 'bottom',
    marginLeft: 15,
  },
});
