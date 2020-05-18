import Main from './Main';

import { usersActions } from '../../../redux/Users';
import { cvCreateActions } from '../../../redux/CvCreate'

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user.user,
    authStatus: state.auth.authStatus,
    loading: state.cvCreate.loading,
    categories: state.cvCreate.categories 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileInfo: () => {
      dispatch(usersActions.getProfile());
    },
    getAllCategories: () => {
      dispatch(cvCreateActions.getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);