import YourVideo from './YourVideo';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';

const mapStateToProps = state => {
  return {
    categories: state.cvCreate.categories,
    cv: state.cvCreate.cv
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setVideo: value => {
//       dispatch(cvCreateActions.setReducerValue('video', value));
//     },
//   };
// };

export default connect(
  mapStateToProps,
 //mapDispatchToProps,
)(YourVideo);