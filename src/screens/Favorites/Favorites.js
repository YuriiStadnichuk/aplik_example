import React, {Component} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity, Text} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import DefaultButton from '../../components/buttons/DefaultButton';
import DefaultHeader from '../../components/Headers/DefaultHeader';
import DefaultResumeVacancyItem from '../../components/ListItems/DefaultResumeVacancyItem';

import {globalStyles, icons, colors} from '../../constants';
import staticData from '../../constants/staticData';
import styles from './styles';

const options = [
  {label: 'Все видео', value: 'all'},
  {label: 'Популярные', value: 'top'},
  {label: 'Недавние', value: 'latest'},
];

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter="Избранное"
          headerRight={
            staticData.resumeList.length !== 0 ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('Favorites')}>
                <icons.Settings />
              </TouchableOpacity>
            ) : null
          }
        />
        <View style={globalStyles.container}>
          <View style={styles.listContainer}>
            {staticData.resumeList.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={globalStyles.SFR_20_Gray}>
                  Избранные видео не найдены
                </Text>
                <DefaultButton
                  title="На главную"
                  titleStyle={{color: 'white'}}
                  onPress={() => navigation.navigate('Main')}
                />
              </View>
            ) : (
              <View>
                <View style={styles.listTopBlock}>
                  <SwitchSelector
                    options={options}
                    initial={0}
                    textColor={colors.GRAY_TEXT}
                    textStyle={globalStyles.SFR_12_Gray}
                    buttonColor={colors.BUTTON_GRADIENT_START}
                    borderRadius={5}
                    height={30}
                    onPress={value =>
                      console.log(`Call onPress with value: ${value}`)
                    }
                  />
                </View>
                <FlatList
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                    paddingHorizontal: '2.5%',
                  }}
                  numColumns={2}
                  scrollEnabled={false}
                  data={staticData.resumeList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <DefaultResumeVacancyItem
                      onPress={() => navigation.navigate('WatchVideo')}
                      item={item}
                      index={index}
                    />
                  )}
                />
              </View>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Favorites;
