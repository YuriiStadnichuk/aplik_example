import AddVideo from './AddVideo';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';

const mapStateToProps = state => {
  return {
    categories: state.cvCreate.categories, 
    professions: state.cvCreate.professions 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCategories: () => {
      dispatch(cvCreateActions.getCategories());
    },
    getAllProfessions: () => {
        dispatch(cvCreateActions.getProfessions());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddVideo);