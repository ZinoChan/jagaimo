import {
    SIGNIN_SUCCESS,
    SIGNOUT_SUCCESS
} from '../constants/constants';

const initState = {}

export default (state = initState , action) => {
    switch(action.type){
        case SIGNIN_SUCCESS:
            return {
                id: action.payload.id,
                type: action.payload.type,
                provider: action.payload.provider
            }
        
        case SIGNOUT_SUCCESS:
            return {}
        default: 
            return state;
    }
}