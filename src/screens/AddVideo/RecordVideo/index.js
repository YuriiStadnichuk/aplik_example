import RecordVideo from './RecordVideo';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';

const mapStateToProps = state => {
  return {
    video: state.cvCreate.cv.video 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVideo: value => {
      dispatch(cvCreateActions.setReducerValue('video', value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordVideo);
