import Registration from './Registration';

import { connect } from 'react-redux';

import { authActions } from '../../../redux/Auth';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePressSignIn: data => {
      dispatch(authActions.login(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
