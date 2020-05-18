import axios from 'axios';

const proffmyLifeApi = axios.create({
  baseURL: 'http://proffmylife.test.appsider.net/api',
});

export const setToken = token => {
  proffmyLifeApi.defaults.headers.common['Authorization'] = `JWT ${token}`;
};

export const deleteToken = () => {
  delete proffmyLifeApi.defaults.headers.common['Authorization'];
};

export default proffmyLifeApi;
