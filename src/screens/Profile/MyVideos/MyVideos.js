import React, { Component } from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';
import Video from 'react-native-video';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import MyResumeVacancyItem from '../../../components/ListItems/MyResumeVacancyItem';
import DefaultButton from '../../../components/buttons/DefaultButton';

import { globalStyles, colors } from '../../../constants';
import staticData from '../../../constants/staticData';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const options = [
  { label: 'Активные', value: 'active' },
  { label: 'Не активые', value: 'inactive' },
];

class MyVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOf: 'active',
    };
  }

  componentDidMount() {
    const { getCvsList } = this.props

    getCvsList()
  }

  render() {
    const { navigation, cvsList, cv } = this.props;
    const { listOf } = this.state;
    console.log(cv.video.uri)
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter="Мои видео"
          headerLeft={
            <Icon
              underlayColor="transparent"
              name="chevron-thin-left"
              type="entypo"
              color="white"
              onPress={() => navigation.goBack()}
            />
          }
        />
        <View style={globalStyles.container}>
          <View style={styles.listContainer}>
            {staticData.resumeList.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={globalStyles.SFR_20_Gray}>Список пуст</Text>
                <DefaultButton
                  title="Записать video"
                  titleStyle={{ color: 'white' }}
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
                      onPress={value => this.setState({ listOf: value })}
                    />
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('WatchOwnVideo', {listOf: listOf})}>
                    <Video
                      paused={false}
                      resizeMode="cover"
                      source={{ uri: cv.video.uri }}
                      ref={ref => {
                        this.player = ref;
                      }}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                  {/* <FlatList
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                    paddingHorizontal: '2.5%',
                  }}
                  numColumns={2}
                  scrollEnabled={false}
                  data={
                    listOf === 'active'
                      ? staticData.resumeList.filter(
                          item => item.active === true,
                        )
                      : staticData.resumeList.filter(
                          item => item.active === false,
                        )
                  }
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <MyResumeVacancyItem
                      onPress={() =>
                        navigation.navigate('WatchOwnVideo', {listOf: listOf})
                      }
                      item={item}
                      index={index}
                      listOf={listOf}
                    />
                  )}
                /> */}
                </View>
              )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default MyVideos;
