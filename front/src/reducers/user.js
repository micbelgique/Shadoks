import * as actions from '../actions/user';

const defaultState = {
    user : {},
    isFetching: false
};

const userReducer = (state = defaultState, action) => {
    switch (action.type){
        case actions.REQUEST_USER:
            return {
                ...state,
                user: {},
                isFetching: true
            };
            break;
        case actions.RECEIVE_USER:
            const { user } = action;
            debugger;
            return {
                ...state,
                user
            };
        default:
            return state;
    }
};

export default userReducer;