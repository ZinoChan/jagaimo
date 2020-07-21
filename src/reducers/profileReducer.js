import { SET_PROFILE, UPDATE_PROFILE_SUCCESS, CLEAR_PROFILE } from '../constants/constants';

const initState = {};


export default (state = initState, action) => {
    switch(action.type){
        case SET_PROFILE:
            return action.payload

        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        case CLEAR_PROFILE:
            return {}
        default: 
            return state;
    }
}