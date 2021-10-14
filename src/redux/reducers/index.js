// Reducers
import counterReducer from './counterReducer';
// . . . . other Reducers
import { combineReducers } from 'redux';

const allReducers = combineReducers({ counter: counterReducer });

export default allReducers;
