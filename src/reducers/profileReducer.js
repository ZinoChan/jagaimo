import { SET_PROFILE, UPDATE_PROFILE_SUCCESS, CLEAR_PROFILE } from '../constants/constants';

const initState = {};


const profileReducer =  (state = initState, action) => {
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

export default profileReducer;