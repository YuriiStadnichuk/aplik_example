import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon, Avatar} from 'react-native-elements';

import DefaultHeader from '../../Headers/DefaultHeader';
import {globalStyles, icons, colors, images} from '../../../constants';
import HorizontalHeadingItem from '../HorizontalHeadingItem';

import staticData from '../../../constants/staticData';
import styles from './styles';

const RenderItem = ({item}) => (
  <View style={{flex: 1, marginHorizontal: 5}}>
    <TouchableOpacity style={styles.imageContainer}>
      <Image
        width={200}
        height={325}
        style={styles.imageStyle}
        //resizeMethod="scale"
        source={item.image}
      />
    </TouchableOpacity>
    <Text style={styles.nameText}>{item.name}</Text>
    <Text style={styles.professionText}>{item.profession}</Text>
  </View>
);

class ResumeVacancyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={staticData.resumeList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <RenderItem item={item} />}
      />
    );
  }
}

export default ResumeVacancyList;
