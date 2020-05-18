import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listTopBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
    marginBottom: 15,
  },
  emptyContainer: {
    paddingHorizontal: '11%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 55,
    paddingTop: 140,
  },
  imageStyle: {
    width: '80%',
    height: 400,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    resizeMode: 'cover',
  },
});
