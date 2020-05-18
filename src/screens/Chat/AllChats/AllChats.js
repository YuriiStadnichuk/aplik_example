import React, {Component} from 'react';
import {View, StatusBar, FlatList} from 'react-native';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import DefaultInput from '../../../components/inputs/DefaultInput';
import ChatItem from '../../../components/ListItems/ChatItem';

import styles from './styles';
import {Icon} from 'react-native-elements';
import staticData from '../../../constants/staticData';
import {globalStyles, colors} from '../../../constants';

class AllChats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: null,
    };
  }

  onSearch = text => {
    var arg = new RegExp(text, 'i');
    let searchResult = staticData.chatList.filter(item => item.name.match(arg));
    this.setState({searchData: searchResult});
  };

  render() {
    const {navigation} = this.props;
    const {searchData} = this.state;
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter="Чат"
          headerLeft={
            <Icon
              underlayColor="transparent"
              name="chevron-thin-left"
              type="entypo"
              color="white"
              onPress={() => navigation.goBack()}
            />
          }
          // headerRight={
          //   <Icon
          //     underlayColor="transparent"
          //     name="check"
          //     type="material"
          //     color="white"
          //     size={30}
          //     onPress={() => navigation.goBack()}
          //   />
          // }
        />
        <View style={globalStyles.container}>
          <View style={styles.inputContainer}>
            <DefaultInput
              onChangeText={text => this.onSearch(text)}
              placeholder="Искать"
              rightIcon={
                <Icon
                  name="search"
                  type="octicon"
                  color={colors.BUTTON_GRADIENT_END}
                />
              }
            />
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={searchData !== null ? searchData : staticData.chatList}
              renderItem={({item}) => (
                <ChatItem
                  item={item}
                  onPress={() => navigation.navigate('Chat')}
                />
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default AllChats;
