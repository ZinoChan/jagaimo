import {call, put, select } from 'redux-saga/effects';
import {
    UPDATE_EMAIL,
    UPDATE_PROFILE
}  from '../constants/constants';
import { isLoading } from '../actions/appActions';

import firebase from '../firebase/firebase';
import { updateProfileSuccess } from '../actions/profileActions';
import { setAuthStatus } from '../actions/authActions';
import { displayActionMessage } from '../helpers/utils';




function* handleError (e){
    yield put(isLoading(false));
    switch(e.code){
        case 'auth/network-request-failed':
            yield put(setAuthStatus({success: false, message: 'Network error has accured, Please try again.'}));
            break;
        case 'auth/wrong-password':
            yield put(setAuthStatus({success: false, message: 'Incorrect  password'}));
            break; 
        default: 
            yield put(setAuthStatus({success: false, message: e}));
            break;
    }
}

function* profileSaga({type, payload}){
    switch(type){
        case UPDATE_EMAIL:
            try {
                yield put(isLoading(true));
                yield call(firebase.updateEmail, payload.password, payload.newEmail);
                yield put(isLoading(false));
                
            } catch (e) {   
                console.log(e);
            }
            break;

        case UPDATE_PROFILE:
            try {
                const state = yield select();;
                const {email, password } = payload.credentials;
                yield put(isLoading(true));

                if(email !== state.profile.email) {
                    yield call(firebase.updateEmail, password, email);
                }
                const newUpdates = {...payload.updates, email: payload.credentials.email}
                yield call(firebase.updateProfile, state.auth.id , newUpdates);
                yield put(updateProfileSuccess(newUpdates));
                yield put(isLoading(false));
                yield call(displayActionMessage, 'Profile Successfully updated');

            } catch (e) {
               yield handleError(e);
            }
            break;

        default: 
            return;
    }
}   

export default profileSaga;


