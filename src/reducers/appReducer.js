import {
    LOADING,
    AUTHENTICATING,
    SET_AUTH_STATUS,
    SET_REQUEST_STATUS
} from '../constants/constants'

const initState = {
    loading: false,
    isAuthenticating: false,
    authStatus: null,
    requestStatus: null
}

export default (state = initState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case AUTHENTICATING:
            return {
                ...state,
                isAuthenticating: action.payload
            }
        case SET_AUTH_STATUS:
            return {
                ...state,
                authStatus: action.payload
            }
        case SET_REQUEST_STATUS:
            return {
                ...state,
                requestStatus: action.payload
            }

        default:
            return state;
    }
}