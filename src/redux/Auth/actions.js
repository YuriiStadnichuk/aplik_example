import {Platform} from 'react-native';
import * as types from './types';
//import {errorActions} from '../Error';
import API, {deleteToken, setToken} from '../../api';
import { store } from '../store';

const setUser = user => ({
  type: types.SIGN_IN,
  payload: user,
});

export const logout = () => ({
  type: types.LOGOUT,
});

const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

const setNewToken = token => ({
  type: types.REFRESH_TOKEN,
  payload: token,
});

export const login = data => dispatch => {
  dispatch(setLoading(true));
  API.post('/auth/jwt/create/', data)
    .then(response => {
      dispatch(setUser(response.data));
      setToken(response.data.access);
    })
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const refreshToken = () => dispatch => {
  const { refresh_token } = store.getState().auth.user;

  API.post('/auth/jwt/create/', { refresh: refresh_token })
    .then(response => dispatch(setNewToken(response.data.access)))
    .catch(error => dispatch(errorActions.setError(error)));
};

// export const restorePassword = emailIncome => dispatch => {
//   API.post('/users/forgot-password/', { email: emailIncome })
//     .then(response => console.warn('Response', response))
//     .catch(error => errorActions.setError(error));
// };
