import  * as ACTIONS  from '../constants/constants';


export const signIn = (email,password) => ({
    type: ACTIONS.SIGNIN,
    payload: {email, password}
});

export const signInSuccess = auth => ({
    type: ACTIONS.SIGNIN_SUCCESS,
    payload: auth
})

export const signUp = user => ({
    type: ACTIONS.SIGNUP,
    payload: user
});


export const signOut = () => ({
    type: ACTIONS.SIGNOUT
});

export const signOutSuccess = () => ({
    type: ACTIONS.SIGNOUT_SUCCESS
});

export const resetPassword = password => ({
    type: ACTIONS.RESET_PASSWORD,
    payload: password
});

export const setAuthStatus = status => ({
    type: ACTIONS.SET_AUTH_STATUS,
    payload: status
});

export const onAuthStatusChanged = () => ({
    type: ACTIONS.ON_AUTH_STATUS_CHANGED
})

export const onAuthStatusSuccess = user => ({
    type: ACTIONS.ON_AUTH_STATUS_SUCCESS,
    payload: user
})

export const onAuthStatusFailed = error => ({
    type: ACTIONS.ON_AUTH_STATUS_FAIL,
    payload: error
});

export const setAuthPersistence = () => ({
    type: ACTIONS.SET_AUTH_PERSISTENCE
});

export const isAuthenticating = bool => ({
    type: ACTIONS.AUTHENTICATING,
    payload: bool
});

export const setUser = user => ({
    type: ACTIONS.SET_USER,
    payload: user
});

export const clearUser = () => ({
    type: ACTIONS.CLEAR_USER
})


