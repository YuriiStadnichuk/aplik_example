import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../constants/colors';
import styles from './styles';

class DefaultInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  _onFocus = () => {
    this.setState({focus: true});
    console.log(this.state.focus);
  };
  _onBlur = () => {
    this.setState({focus: false});
    console.log(this.state.focus);
  };

  render() {
    const {focus, nameInputError} = this.state;
    const {...props} = this.props;
    return (
      <Input
        {...props}
        // onChangeText={value => props._onChangeText(value)}
        inputContainerStyle={styles.inputContainerStyle}
        containerStyle={
          props.error === true
            ? styles.errorContainerStyle
            : focus === true
            ? styles.focusedContainerStyle
            : styles.containerStyle
        }
        placeholderTextColor={colors.WHITE_TEXT}
        inputStyle={
          props.error === true ? styles.errorInputStyle : styles.inputStyle
        }
        onFocus={this._onFocus}
        onBlur={this._onBlur}
      />
    );
  }
}

export default DefaultInput;
