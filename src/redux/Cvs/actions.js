import API, { setToken } from '../../api';
import { store } from '../store';

import * as types from './types';

const setCvsList = cvs => ({
  type: types.SET_LIST,
  payload: cvs,
});

export const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

//Get all ads with filters
export const getCvs = () => dispatch => {
  // const { access_token } = store.getState().auth.user;
  // if (access_token !== null) {
  //   setToken(access_token);
  // }

  dispatch(setLoading(true));

  API.get('/catalogs/cv/my/')
    .then(response => dispatch(setCvsList(response.data)))
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(errorActions.setError(error)));
};

// export const getCvsLoadMore = url => dispatch => {
//   if (url !== null) {
//     API.get(url)
//       .then(response => dispatch(setCvsLoadMore(response.data)))
//       .catch(error => dispatch(errorActions.setError(error)));
//   }
// };

// export const addToFavorite = id => dispatch => {
//   var requestData = new FormData();
//   requestData.append('cv_id', id);

//   API.post('', requestData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });

//   dispatch(setCvsToFavorite(id));
// };

// export const removeFromFavorite = id => dispatch => {
//   API.delete(`/cvs/delete-favorite/${id}/`);

//   dispatch(setCvsToFavorite(id));
// };
