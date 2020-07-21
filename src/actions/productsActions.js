import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS
} from '../constants/constants';


export const getProducts = collection => ({
    type: GET_PRODUCTS,
    payload: collection
});

export const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
});


