import { AuthAPI } from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    isAuth: false,
    isAdmin: false
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setUserDataAction = (isAuth, isAdmin) => {
    return {
        type: SET_USER_DATA,
        payload: { isAuth, isAdmin }
    };
};

export const login = (login, password, setSubmitting) => {
    return async (dispatch) => {
        const response = await AuthAPI.login(login, password);
        setSubmitting(false);

        if (response.status === 200) {
            const { isAuth, isAdmin } = response.data;
            dispatch(setUserDataAction(isAuth, isAdmin));
        }
    };
};

export const join = (login, password, setSubmitting) => {
    return async (dispatch) => {
        const response = await AuthAPI.join(login, password);
        setSubmitting(false);

        if (response.status === 200) {
            const { isAuth, isAdmin } = response.data;
            dispatch(setUserDataAction(isAuth, isAdmin));
        }
    };
};
