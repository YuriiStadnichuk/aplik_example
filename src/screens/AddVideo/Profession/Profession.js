import React, { Component } from 'react';
import { View, StatusBar, Text, FlatList } from 'react-native';

import DefaultHeader from '../../../components/Headers/DefaultHeader';
import { globalStyles, colors } from '../../../constants';
import DefaultInput from '../../../components/inputs/DefaultInput';

import styles from './styles';
import { Icon } from 'react-native-elements';
import staticData from '../../../constants/staticData';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Profession extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressItem = (item) => {
    const { navigation, setProfession } = this.props;
    setProfession(item)
    navigation.navigate('YourVideo')
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{ flex: 1 }}>
          <DefaultHeader
            headerCenter="Профессия"
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
                onPress={() => navigation.navigate('YourVideo')}
              />
            }
          />
          <View style={globalStyles.container}>
            <View style={styles.inputContainer}>
              <DefaultInput
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
                data={staticData.professionsList}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    //onPress={this.onPressItem(1)}
                    onPress={() => navigation.navigate('YourVideo')}
                  >
                    <Text style={[globalStyles.SFR_16_Gray, { marginVertical: 5 }]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Profession;
