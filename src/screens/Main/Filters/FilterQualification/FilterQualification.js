import React, {Component} from 'react';
import {View, StatusBar, FlatList} from 'react-native';

import DefaultHeader from '../../../../components/Headers/DefaultHeader';
import {globalStyles, colors} from '../../../../constants';
import DefaultInput from '../../../../components/inputs/DefaultInput';
import HeadingItem from '../../../../components/ListItems/HeadingItem';

import {Icon} from 'react-native-elements';
import staticData from '../../../../constants/staticData';

class FilterQualification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter="Квалификация"
            headerLeft={
              <Icon
                underlayColor="transparent"
                name="chevron-thin-left"
                type="entypo"
                color="white"
                onPress={() => navigation.goBack()}
              />
            }
            headerRight={
              <Icon
                underlayColor="transparent"
                name="check"
                type="material"
                color="white"
                size={30}
                onPress={() => navigation.goBack()}
              />
            }
          />
          <View style={globalStyles.container}>
            <View
              style={{
                paddingHorizontal: 7,
                paddingTop: 30,
              }}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={staticData.qualificationList}
                renderItem={({item}) => <HeadingItem item={item} />}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default FilterQualification;
