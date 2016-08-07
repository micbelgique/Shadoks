import * as actions from '../actions/rooms'

const defaultState = {
    rooms: [],
    isFetching: false,
    roomSelected: {}
};

const roomsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.REQUEST_ROOMS:
            return {
                ...state,
                rooms: [],
                isFetching: true
            };
            break;
        case actions.RECEIVE_ROOMS:
            const { rooms } = action;
            return {...state,
                rooms,
                isFetching: false
            };
            break;
        case actions.SELECT_ROOMS:
            const { room } = action;
            return {...state,
                roomSelected: room
            };
            break;
        default:
            return state;
    }
};


export default roomsReducer;
