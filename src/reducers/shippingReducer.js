import {
    SET_SHIPPING_SUCCESS,
    RESET_SHIPPING_DETAILS
} from '../constants/constants';


const initState = {};

const shippingReducer = (state= initState, action) => {
    switch(action.type){
        case SET_SHIPPING_SUCCESS:
            return {
                orders: action.payload.orders,
                timeOrdered: action.payload.timeOrdered,
                totalPrice: action.payload.totalPrice,
                estimateDeliveryTime: action.payload.estimateTime
            }
        case RESET_SHIPPING_DETAILS:
            return {}
        default:
            return state;
    }
}

export default shippingReducer;