import LogIn from './LogIn';

import { connect } from 'react-redux';

import { authActions } from '../../../redux/Auth';

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePressSignIn: data => {
      dispatch(authActions.login(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
