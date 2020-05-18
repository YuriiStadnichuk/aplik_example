import API from '../../api';
import { store } from '../store';

import * as types from './types';

const setCategories = data => ({
  type: types.SET_CATEGORIES,
  payload: data,
});

const setProfessions = data => ({
  type: types.SET_PROFESSIONS,
  payload: data,
});

const cvPosted = data => ({
  type: types.POSTED_CV,
  payload: data,
});

const setLoading = status => ({
  type: types.SET_LOADING,
  payload: status,
});


export const setReducerValue = (name, value) => ({
  type: types.SET_VALUE,
  name,
  value,
});

export const addVideo = video => ({
  type: types.ADD_VIDEO,
  payload: video,
});

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/catalogs/category/')
    .then(response => dispatch(setCategories(response.data))
    .then(() => dispatch(setLoading(false)))
  );

};

export const getProfessions = () => dispatch => {
  API.get('/catalogs/profession/').then(response =>
    dispatch(setProfessions(response.data)),
  );
};

export const createCv = () => dispatch => {
  const { cv } = store.getState().cvCreate;
  const cvData = new FormData();

  cvData.append('category', cv.category);
  cvData.append('profession', cv.profession);
  cvData.append('video', cv.video);

  console.log('FormData', cvData);
  API.post('/catalogs/cv/', cvData)
  .then(response => console.log('Response add an cv', response.data))

  cvPosted();
};
