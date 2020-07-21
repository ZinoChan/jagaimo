import {
    SET_PROFILE,
    UPDATE_EMAIL,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    CLEAR_PROFILE   
} from '../constants/constants'


export const setProfile = user => ({
    type: SET_PROFILE,
    payload: user
});

export const updateEmail = (password, newEmail) => ({
    type: UPDATE_EMAIL,
    payload: {
        password,
        newEmail
    }
});

export const updateProfile = newProfile => ({
    type: UPDATE_PROFILE,
    payload: {
        updates: newProfile.updates,
        credentials: newProfile.credentials
    }
});

export const updateProfileSuccess = updates => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: updates
});

export const clearProfile = () => ({
    type: CLEAR_PROFILE
});