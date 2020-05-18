import ChooseTypeProfile from './ChooseTypeProfile';

import { usersActions } from '../../../redux/Users';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    token: state.auth.user !== null ? state.auth.user.access : null,
    //userType: state.user.user.user_type,
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

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTypeProfile);