import LogOut from './LogOut';

import { connect } from 'react-redux';

import { authActions } from '../../../redux/Auth';

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(authActions.logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(LogOut);
