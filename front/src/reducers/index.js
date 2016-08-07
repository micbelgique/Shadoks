import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import rooms from './rooms';
import user from './user';


export default combineReducers({
    rooms,
    user,
    routing: routerReducer
});
