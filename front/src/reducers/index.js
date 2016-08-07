import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import rooms from './rooms';


export default combineReducers({
    rooms,
    routing: routerReducer
});
