export const REQUEST_ROOMS = 'REQUEST_ROOMS';
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const SELECT_ROOMS = 'SELECT_ROOMS';

import config from '../config';


function RequestRooms(){
  return {
    type: REQUEST_ROOMS
  };
}

function ReceiveRooms(rooms){
  return {
    type: RECEIVE_ROOMS,
    rooms
  };
}

function FetchRooms(state){
  return (dispatch) => {
    dispatch(RequestRooms());
    // fetch(`${config.baseUrl}/rooms/getall`)
    fetch(`${config.baseUrl}/Api/rooms.json`)
    .then((response) => {
      return response.json();
    }).then((responseJson) => {
      dispatch(ReceiveRooms(responseJson));
    }).catch((error) => {
      console.log('tant pis pour ta gueule!!!!');
    })
  }
}

function  ShouldFetch(state) {
  return !state.rooms.isFetching;
}

export function LoadRooms() {
  debugger;
  return (dispatch, getState) => {
    if (!ShouldFetch(getState())) return null;

    return dispatch(FetchRooms(getState()));
  }
}

export function ViewRoom(room){
  return{
    type: SELECT_ROOMS,
    room
  };
}
