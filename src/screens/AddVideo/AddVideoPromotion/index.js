import AddVideoPromotion from './AddVideoPromotion';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';

const mapDispatchToProps = dispatch => {
  return {
    createNewCv: () => {
      dispatch(cvCreateActions.createCv());
    },
  };
};

export default connect(null, mapDispatchToProps)(AddVideoPromotion);
