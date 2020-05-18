import React, {Component} from 'react';
import {View, StatusBar, FlatList, Text} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import PurchaseResumeVacancyItem from '../../../components/ListItems/PurchaseResumeVacancyItem';
import DefaultButton from '../../../components/buttons/DefaultButton';

import {globalStyles} from '../../../constants';
import staticData from '../../../constants/staticData';
import styles from './styles';

class PurchaseHistory extends Component {
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
          headerCenter="История покупок"
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
                  title="Продвигать"
                  titleStyle={{color: 'white'}}
                  onPress={() => navigation.navigate('MyVideos')}
                />
              </View>
            ) : (
              <FlatList
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                  paddingHorizontal: '2.5%',
                }}
                numColumns={2}
                scrollEnabled={false}
                data={staticData.resumeList.filter(item => item.top !== null)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <PurchaseResumeVacancyItem
                    onPress={() => navigation.navigate('WatchVideo')}
                    item={item}
                    index={index}
                  />
                )}
              />
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default PurchaseHistory;
