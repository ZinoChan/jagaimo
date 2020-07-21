import { call, put, select } from 'redux-saga/effects';

import firebase from '../firebase/firebase';

import history from '../router/AppRouter';

import {
    SIGNIN,
    SIGNUP,
    SIGNOUT,
    ON_AUTH_STATUS_FAIL,
    ON_AUTH_STATUS_SUCCESS,
    SET_AUTH_PERSISTENCE,
    RESET_PASSWORD
} from '../constants/constants';

import {
    setAuthStatus,
    signInSuccess,
    signOutSuccess,
    isAuthenticating,
    setUser,
    clearUser
} from '../actions/authActions';

import {
    setProfile,
    clearProfile
} from '../actions/profileActions'

import { clearCart } from '../actions/cartActions';
import { isLoading } from '../actions/appActions';
import { displayActionMessage } from '../helpers/utils';



function* handleError(e) {
    yield put(isAuthenticating(false));
    switch(e.code){
        case 'auth/network-request-failed':
            yield put(setAuthStatus({success: false, message: 'Network error has accured, Please try again.'}));
            break;
        case 'auth/email-already-in-use':
            yield put(setAuthStatus({success: false, message: 'Email is already in use, Please use another email'}));
            break;
        case 'auth/wrong-password':
            yield put(setAuthStatus({success: false, message: 'Incorrect email or password'}));
            break; 
        case 'auth/user-not-found':
            yield put(setAuthStatus({success: false, message: 'wrong email or password'}));
            break;
        case 'auth/reset-password-error':
            yield put(setAuthStatus({success: false, message: 'Failed to send password reset email. Did you type your email correctly'}));
            break;
        default: 
            yield put(setAuthStatus({success: false, message: e}));
            break;
    }
}

function* initRequest(){
    yield put(isAuthenticating(true));
    yield put(setAuthStatus(null));
}


function* authSaga({type, payload}){
    switch(type){
        case SIGNIN:
            try {
                yield initRequest();
                yield call(firebase.signIn, payload.email, payload.password);
            } catch (e) {
                yield handleError(e);
            }
        break;

        case SIGNUP:
            try {
                yield initRequest();
                
                const user = {
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    address: '',
                    mobile: '',
                    postalCode: '',
                    role: 'USER',
                    
                }
                yield put(setUser(user));
                yield call(firebase.createAccount, payload.email, payload.password);
                
            } catch (e) {
                yield handleError(e);
            }
        break;

        case SIGNOUT:
            try {
                yield initRequest();
                yield call(firebase.signOut);
                yield put(clearCart());
                yield put(clearProfile())
                //yield put(resetShippingDetails());
                yield put(signOutSuccess());
                yield put(isAuthenticating(false));
                yield call(displayActionMessage, 'Sign Out Successfully', 'info')
                yield call(history.push, '/signin');
                

            } catch (e) {
                yield handleError(e);
            }
            break;
        
        case RESET_PASSWORD:
            try {
                yield put(initRequest());
                yield call(firebase.passwordReset, payload.email);
                yield put(setAuthStatus({success: "true", message: "password reset email has been sent to your email"}));
                yield put(isAuthenticating(false));
            } catch (e) {
                yield handleError(e);
            }
            break;
        
        case ON_AUTH_STATUS_SUCCESS:
            try {
                yield put(setAuthStatus({success: true, message: 'Signed In Successfully'}))
                
                yield put(isAuthenticating(true));
                const snapshot = yield call(firebase.getUser, payload.uid);
                if(snapshot.data()){
                    yield put(setProfile(snapshot.data()))
                }else{
                    const state = yield select();
                    yield call(firebase.addUser, payload.uid, state.user);
                    yield put(setProfile(state.user));
                }
                displayActionMessage('Signed In successfully', 'info');
                
                yield put(signInSuccess({
                    id: payload.uid,
                    type: 'client',
                    provider: payload.providerData[0].providerId
                }));
                yield put(isAuthenticating(false));
                yield put(isLoading(false));

            } catch (e) {
                yield handleError(e);
            }
            break;

        case ON_AUTH_STATUS_FAIL:
            yield put(clearProfile());
            yield put(signOutSuccess());
            yield put(clearUser());
            yield put(isLoading(false));
            break;

        case SET_AUTH_PERSISTENCE:
            try {
                yield call(firebase.setAuthPersistence);
            } catch (e) {
                console.log(e)
            }
            break;
        
        default:
            return;

    }
}



export default authSaga;