import * as types from './types';

const initState = {
  cvsList: [],
  loading: true
};

const cvsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_LIST: {
      return {
        ...state,
        cvsList: action.payload,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cvsReducer;
