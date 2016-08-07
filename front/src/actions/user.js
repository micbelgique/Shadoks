export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

import {browserHistory} from 'react-router'
import config from '../config';

function RequestUser(){
    return {
        type: REQUEST_USER
    };
}

function ReceiveUser(user){
    browserHistory.push('/');
    return {
        type: RECEIVE_USER,
        user
    };
}

function FetchUser(state){
    return (dispatch) => {
        dispatch(RequestUser());
        fetch(`${config.urls.user}`)
        .then((response)=>{
            return response.json();
        })
        .then((responseJson) => {
            dispatch(ReceiveUser(responseJson));
        })
    }
}


function  ShouldFetch(state) {
  return !state.rooms.isFetching;
}


export function LoadUser() {
  return (dispatch, getState) => {
    if (!ShouldFetch(getState())) return null;

    return dispatch(FetchUser(getState()));
  }
}
