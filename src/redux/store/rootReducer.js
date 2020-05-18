import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import authReducer from '../Auth/reducer';
import usersReducer from '../Users/reducer'
import cvCreateReducer from '../CvCreate/reducer'
import cvsReducer from '../Cvs/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: [
    'users',
    'cvCreate',
    'cvs'
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: usersReducer,
  cvCreate: cvCreateReducer,
  cvs: cvsReducer
});

export default persistReducer(persistConfig, rootReducer);
