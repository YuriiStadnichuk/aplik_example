import React, {Component} from 'react';
import {View, StatusBar, Text, SafeAreaView, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import DefaultHeader from '../../../../components/Headers/DefaultHeader';
import {globalStyles, icons, images, colors} from '../../../../constants';
import {ProfileButton} from '../../../../components/Items';
import HeadingItem from '../../../../components/ListItems/HeadingItem';

import styles from './styles';
import {Icon} from 'react-native-elements';
import staticData from '../../../../constants/staticData';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation} = this.props;
    const {listType} = this.props.route.params;
    return (
      <View style={{flexGrow: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{flexGrow: 1}}>
          <DefaultHeader
            headerCenter={
              listType === 'resume' ? 'Фильтр резюме' : 'Фильтр вакансий'
            }
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
              <ProfileButton
                onPress={() => navigation.navigate('FilterProfession')}
                leftItem={<icons.Case />}
                title="Профессия"
                rightItem={
                  <Icon
                    name="chevron-thin-right"
                    type="entypo"
                    color={colors.CHEVRON_RIGHT_COLOR}
                    size={18}
                  />
                }
              />
              <ProfileButton
                onPress={() => navigation.navigate('FilterCity')}
                leftItem={<icons.Pin />}
                title="Город"
                rightItem={
                  <Icon
                    name="chevron-thin-right"
                    type="entypo"
                    color={colors.CHEVRON_RIGHT_COLOR}
                    size={18}
                  />
                }
              />
              <ProfileButton
                onPress={() => navigation.navigate('FilterHeading')}
                leftItem={<icons.Menu />}
                title="Рубрика"
                rightItem={
                  <Icon
                    name="chevron-thin-right"
                    type="entypo"
                    color={colors.CHEVRON_RIGHT_COLOR}
                    size={18}
                  />
                }
              />
              {listType === 'resume' ? (
                <ProfileButton
                  onPress={() => navigation.navigate('FilterAge')}
                  leftItem={<icons.Calendar />}
                  title="Возраст"
                  rightItem={
                    <Icon
                      name="chevron-thin-right"
                      type="entypo"
                      color={colors.CHEVRON_RIGHT_COLOR}
                      size={18}
                    />
                  }
                />
              ) : null}

              <ProfileButton
                onPress={() => navigation.navigate('FilterQualification')}
                leftItem={<icons.Graph />}
                title="Квалификация"
                rightItem={
                  <Icon
                    name="chevron-thin-right"
                    type="entypo"
                    color={colors.CHEVRON_RIGHT_COLOR}
                    size={18}
                  />
                }
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Filters;
