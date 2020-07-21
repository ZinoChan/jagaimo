import {
    LOADING
} from '../constants/constants';


export const isLoading = bool => ({
    type: LOADING,
    payload: bool
})



