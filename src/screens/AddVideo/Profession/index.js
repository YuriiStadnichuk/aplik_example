import Profession from './Profession';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';

const mapStateToProps = state => {
  return {
    professions: state.cvCreate.professions 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProfession: value => {
      dispatch(cvCreateActions.setReducerValue('profession', value));
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Profession);
