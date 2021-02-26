import {combineReducers} from 'redux';
import employeeReducer from './UserReducer';

export default combineReducers({
    employee : employeeReducer,
});