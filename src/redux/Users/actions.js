import API from '../../api';

import * as types from './types';

const setProfile = profile => ({
  type: types.SET_PROFILE,
  payload: profile,
});

const setLoading = status => ({
  type: types.SET_LOADING,
  payload: status,
});


// const setAvatar = avatar => ({
//   type: types.SET_AVATAR,
//   payload: avatar,
// });

export const setAdsStatus = active => dispatch => {
  dispatch({
    type: types.SET_PROFILE_ADS_STATUS,
    payload: active,
  });
  dispatch(getProfileAds());
};

export const getProfile = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/users/me/')
    .then(response => dispatch(setProfile(response.data)))
    .then(() => dispatch(setLoading(false)))
};

// export const changeProfile = newProfile => dispatch => {
//   API.put('/users/profile-info/', newProfile).catch(error =>
//     dispatch(errorActions.setError(error)),
//   );
// };

// export const updateAvatar = avatar => dispatch => {
//   const data = new FormData();
//   data.append('avatar', {
//     name: avatar.fileName,
//     type: avatar.type === null ? 'image/jpeg' : avatar.type,
//     uri:
//       Platform.OS === 'android'
//         ? avatar.uri
//         : avatar.uri.replace('file://', ''),
//   });

//   API.post('/users/change-avatar/', data, {
//     headers: { 'Content-Type': 'multipart/form-data' },
//   })
//     .then(response => dispatch(setAvatar(response.data.avatar)))
//     .catch(error => dispatch(errorActions.setError(error)));
// };
