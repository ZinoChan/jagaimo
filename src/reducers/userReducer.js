import {SET_USER, CLEAR_USER } from '../constants/constants';


export default (state={}, action) => {
    switch(action.type){
        case SET_USER:
            return action.payload;
        case CLEAR_USER:
            return {}
        default:
            return state
    }
}