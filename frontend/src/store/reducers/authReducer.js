import {LOGIN, LOGOUT} from '../actions/authActions';

const initialState = {
    name : null,
    role : null
}

export default function authReducer(state = initialState, action) {
    switch(action.type){
        case LOGIN :
            return{
                ...state,
                name : action.payload.name,
                role : action.payload.role
            }

        case LOGOUT :
            return initialState;

        default:
            return state;
    }
}