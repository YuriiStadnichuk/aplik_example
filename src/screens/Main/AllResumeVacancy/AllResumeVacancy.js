import React, {Component} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import HorizontalHeadingItem from '../../../components/ListItems/HorizontalHeadingItem';
import DefaultResumeVacancyItem from '../../../components/ListItems/DefaultResumeVacancyItem';

import {globalStyles, icons, colors} from '../../../constants';
import staticData from '../../../constants/staticData';
import styles from './styles';

const options = [
  {label: 'Все видео', value: 'all'},
  {label: 'Популярные', value: 'top'},
  {label: 'Недавние', value: 'latest'},
];

class AllResumeVacancy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    const {listType} = this.props.route.params;
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          contentContainerStyle={{flexGrow: 1}}>
          <DefaultHeader
            headerLeft={
              <Icon
                underlayColor="transparent"
                name="chevron-thin-left"
                type="entypo"
                color="white"
                onPress={() => navigation.goBack()}
              />
            }
            headerCenter={listType === 'resume' ? 'Резюме' : 'Вакансии'}
            headerRight={
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Filters', {listType: listType})
                }>
                <icons.Settings />
              </TouchableOpacity>
            }
          />
          <View style={globalStyles.container}>
            <View style={styles.topBlock}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={staticData.horizontalHeadingList}
                renderItem={({item}) => <HorizontalHeadingItem item={item} />}
              />
            </View>
            <View style={styles.listContainer}>
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
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default AllResumeVacancy;
