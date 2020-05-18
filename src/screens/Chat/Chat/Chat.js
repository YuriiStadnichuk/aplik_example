import React, {Component} from 'react';
import {View, StatusBar, Text, FlatList, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DefaultHeader from '../../../components/Headers/DefaultHeader';
import MultiLineInput from '../../../components/inputs/MultiLineInput';
import DefaultButton from '../../../components/buttons/DefaultButton';
import MessageItem from '../../../components/ListItems/MessageItem';

import styles from './styles';
import {Icon, Avatar} from 'react-native-elements';
import staticData from '../../../constants/staticData';
import {globalStyles, icons} from '../../../constants';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attach: false,
      send: false,
    };
  }
  render() {
    const {navigation} = this.props;
    const {attach, send} = this.state;
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <DefaultHeader
          headerCenter="Jane Doe"
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
          <View style={styles.avatarContainer}>
            <Avatar size={80} rounded />
            <Text style={[globalStyles.SFR_16_Gray, {marginTop: 10}]}>
              Дизайнер
            </Text>
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={staticData.messageList}
              renderItem={({item}) => <MessageItem item={item} />}
            />
          </View>
          <View style={styles.inputContainer}>
            {attach ? (
              <icons.AttachActive
                style={{alignSelf: 'flex-end', marginBottom: 5}}
              />
            ) : (
              <icons.Attach
                style={{alignSelf: 'flex-end', marginBottom: 5}}
                onPress={() => this.setState({attach: true})}
              />
            )}

            <MultiLineInput placeholder="Сообщене" />
            {send ? (
              <icons.SendActive />
            ) : (
              <icons.Send onPress={() => this.setState({send: true})} />
            )}
          </View>
          {attach ? (
            <View style={styles.buttonsBlock}>
              <DefaultButton
                title="Фото или видео"
                titleStyle={{color: 'white'}}
                onPress={() => navigation.navigate(null)}
                containerStyle={{marginVertical: 5}}
              />
              <DefaultButton
                title="Файл"
                titleStyle={{color: 'white'}}
                onPress={() => navigation.navigate(null)}
                containerStyle={{marginVertical: 5}}
              />
              <DefaultButton
                title="Отмена"
                titleStyle={{color: 'white'}}
                onPress={() => this.setState({attach: false})}
                containerStyle={{marginVertical: 5}}
              />
            </View>
          ) : null}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Chat;
