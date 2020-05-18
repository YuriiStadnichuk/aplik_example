import EmployeePersonalData from './EmployeePersonalData';

import { usersActions } from '../../../redux/Users';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    name: state.user.user.first_name === '' ? 'ФИО' : state.user.user.first_name + ' ' + state.user.user.last_name, 
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePersonalData);
