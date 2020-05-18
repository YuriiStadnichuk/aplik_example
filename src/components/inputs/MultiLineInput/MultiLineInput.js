import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../constants/colors';
import styles from './styles';

class MultiLineInput extends Component {
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
    const {focus} = this.state;
    const {...props} = this.props;
    return (
      <Input
        {...props}
        inputContainerStyle={styles.inputContainerStyle}
        containerStyle={
          focus === true ? styles.focusedContainerStyle : styles.containerStyle
        }
        placeholderTextColor={colors.WHITE_TEXT}
        inputStyle={styles.inputStyle}
        multiline
        onFocus={this._onFocus}
        onBlur={this._onBlur}
      />
    );
  }
}

export default MultiLineInput;
