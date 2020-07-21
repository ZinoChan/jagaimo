import {
    SET_SHIPPING_DETAILS,
    RESET_SHIPPING_DETAILS,
    SET_SHIPPING_SUCCESS
} from '../constants/constants';


export const setShippingDetails = (details) => ({
    type: SET_SHIPPING_DETAILS,
    payload: details
});


export const resetShippingDetails = () => ({
    type: RESET_SHIPPING_DETAILS
})


export const setShippingSuccess = details => ({
    type: SET_SHIPPING_SUCCESS,
    payload: details
})