/**
 * Created by ryan on 2018/2/21.
 */
import {FETCH_CURRENT_USER } from '../constants/actionTypes' ;

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user') ;

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};