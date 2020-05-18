import Profile from './Profile';

import { usersActions } from '../../../redux/Users';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user.user,
    authStatus: state.auth.authStatus,
    loading: state.user.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: () => {
      dispatch(usersActions.getProfile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
