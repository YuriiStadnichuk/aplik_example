import React, {Component} from 'react';
import {View, StatusBar, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import LoadingStatus from '../../../components/LoadingStatus'
import DefaultHeader from '../../../components/Headers/DefaultHeader';
import {globalStyles, icons} from '../../../constants';
import HorizontalHeadingItem from '../../../components/ListItems/HorizontalHeadingItem';
import MainResumeVacancyItem from '../../../components/ListItems/MainResumeVacancyItem';

import staticData from '../../../constants/staticData';
import styles from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getAllCategories } = this.props

    getAllCategories();
  }

  render() {
    const {navigation, loading, categories} = this.props;

    // if (loading) {
    //   return <LoadingStatus />;
    // }
    console.log(categories)
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          contentContainerStyle={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter={<icons.Logo width={150} height={35} />}
            headerRight={<icons.Settings />}
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
                <Text style={globalStyles.SFR_20_Gray}>Резюме</Text>
                <Text
                  onPress={() =>
                    navigation.navigate('AllResumeVacancy', {
                      listType: 'resume',
                    })
                  }
                  style={globalStyles.SFR_16_Light}>
                  Все
                </Text>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={staticData.resumeList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <MainResumeVacancyItem
                    onPress={() => navigation.navigate('WatchVideo')}
                    item={item}
                    index={index}
                  />
                )}
              />
            </View>
            <View style={styles.listContainer}>
              <View style={styles.listTopBlock}>
                <Text style={globalStyles.SFR_20_Gray}>Вакансии</Text>
                <Text
                  onPress={() =>
                    navigation.navigate('AllResumeVacancy', {
                      listType: 'vacancy',
                    })
                  }
                  style={globalStyles.SFR_16_Light}>
                  Все
                </Text>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={staticData.resumeList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <MainResumeVacancyItem item={item} index={index} />
                )}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Main;
