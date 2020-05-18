import MyVideos from './MyVideos';
import { connect } from 'react-redux';
import { cvsActions } from '../../../redux/Cvs';

const mapStateToProps = state => {
  return {
    cv: state.cvCreate.cv,
    cvsConfig: state.cvs.cvsList,
    cvsList: state.cvs.cvsList.results,
    loading: state.cvs.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCvsList: () => {
      dispatch(cvsActions.getCvs());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);
