import { takeLatest} from "redux-saga/effects";
import * as ACTIONS from "../constants/constants";

import authSaga from './authSaga';
import productSaga from './productSaga';
import profileSaga from "./profileSaga";
import shippingSaga from "./shippingSaga";


function* rootSaga(){
    yield takeLatest([
        ACTIONS.SIGNIN,
        ACTIONS.SIGNOUT,
        ACTIONS.ON_AUTH_STATUS_FAIL,
        ACTIONS.ON_AUTH_STATUS_SUCCESS,
        ACTIONS.SIGNUP,
        ACTIONS.SET_AUTH_PERSISTENCE,
        ACTIONS.RESET_PASSWORD
    ], authSaga);

    yield takeLatest([
        ACTIONS.UPDATE_EMAIL,
        ACTIONS.UPDATE_PROFILE
    ], profileSaga);

    yield takeLatest([
        ACTIONS.GET_PRODUCTS
    ], productSaga);

    yield takeLatest([
        ACTIONS.SET_SHIPPING_DETAILS
    ], shippingSaga);
}

export default rootSaga;