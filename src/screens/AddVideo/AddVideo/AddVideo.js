import React, {Component} from 'react';
import {View, StatusBar, Text, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import {globalStyles, icons} from '../../../constants';
import DefaultButton from '../../../components/buttons/DefaultButton';
import MainResumeVacancyItem from '../../../components/ListItems/MainResumeVacancyItem';

import staticData from '../../../constants/staticData';
import styles from './styles';

class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { getAllCategories, getAllProfessions } = this.props

    getAllCategories();
    getAllProfessions();
  }
  
  render() {
    const {navigation} = this.props;
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
            headerCenter="Видео-резюме"
          />
          <View style={globalStyles.container}>
            <View style={styles.topBlock}>
              <Text style={styles.topText}>
                Информация, которую вам необходимо озвучить в video резюме
              </Text>
            </View>
            <View style={styles.middleBlock}>
              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  <icons.Info />
                </View>
                <Text style={globalStyles.SFR_16_Gray}>Имя и фамилия</Text>
              </View>

              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  <icons.Calendar />
                </View>
                <Text style={globalStyles.SFR_16_Gray}>Возраст</Text>
              </View>

              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  <icons.Employee />
                </View>
                <Text style={globalStyles.SFR_16_Gray}>Профессия</Text>
              </View>

              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  <icons.Cloud />
                </View>
                <Text style={globalStyles.SFR_16_Gray}>Мечта</Text>
              </View>

              <View style={styles.infoItemContainer}>
                <View style={styles.iconContainer}>
                  <icons.Speaker />
                </View>
                <Text style={globalStyles.SFR_16_Gray}>
                  Пожелания к работодателю
                </Text>
              </View>
            </View>

            <Text
              style={[
                globalStyles.SFR_20_Gray,
                {marginTop: 20, marginBottom: 15, paddingHorizontal: '8.5%'},
              ]}>
              Примеры video резюме
            </Text>
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
            <View style={styles.bottomBlock}>
              <DefaultButton
                title="Создать резюме"
                titleStyle={{color: 'white'}}
                onPress={() => navigation.navigate('RecordVideo')}
              />
              <Text style={globalStyles.SFR_16_Gray}>
                Максимальная длительность{' '}
                <Text style={globalStyles.SFR_16_Light}>30 сек.</Text>
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default AddVideo;
