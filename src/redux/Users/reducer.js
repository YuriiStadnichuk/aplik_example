import {
  SET_PROFILE,
  SET_LOADING
} from './types';

const initState = {
  user: null,
  loading: false
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    // case SET_AVATAR: {
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       avatar: action.payload,
    //     },
    //   };
    // }
    default:
      return state;
  }
};

export default usersReducer;
