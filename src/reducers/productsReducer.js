import { GET_PRODUCTS_SUCCESS } from '../constants/constants';


const productsReducer =  (state={items: []}, action) => {
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                items: [...action.payload]
            }
        default: 
            return state;
    }
}

export default productsReducer;