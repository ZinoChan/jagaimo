import { call, put, select } from 'redux-saga/effects';
import {
    SET_SHIPPING_DETAILS
} from '../constants/constants';

import {
    setShippingSuccess
} from '../actions/shippingActions';


import { isLoading } from '../actions/appActions';

import firebase from '../firebase/firebase';

function* shippingSaga({type, payload}){
    switch(type){
        case SET_SHIPPING_DETAILS:
            try {
                yield put(isLoading(true));
                const state = yield select()
                yield call(firebase.addOrder, state.auth.id, {shippingDetails: payload.details, user: payload.user, orders: payload.cart});
                yield put(setShippingSuccess({
                    orders: state.cart,
                    clientDetails: payload.user,
                    shippingDetails: payload.details,
                    timeOrdered: new Date().getTime()
                }));
                yield put(isLoading(false));

            } catch (e) {
                console.log(e);
                yield put(isLoading(false));
            }
            break;
        default:
            return;
    }
}

export default shippingSaga;