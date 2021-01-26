import { AdminAPI } from '../../api/api';

const SET_ADMIN_TANK_DATA = 'SET_ADMIN_TANK_DATA';
const SET_ADMIN_LEVELS_DATA = 'SET_ADMIN_LEVELS_DATA';
const SET_ADMIN_CLASSES_DATA = 'SET_ADMIN_CLASSES_DATA';
const SET_ADMIN_NATIONS_DATA = 'SET_ADMIN_NATIONS_DATA';

const initialState = {
    tanks: [],
    classes: [],
    levels: [],
    nations: []
};

export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN_TANK_DATA:
            return {
                ...state,
                tanks: [...action.payload]
            };
        case SET_ADMIN_LEVELS_DATA:
            return {
                ...state,
                levels: [...action.payload]
            };
        case SET_ADMIN_CLASSES_DATA:
            return {
                ...state,
                classes: [...action.payload]
            };
        case SET_ADMIN_NATIONS_DATA:
            return {
                ...state,
                nations: [...action.payload]
            };
        default:
            return state;
    }
};

export const setAdminTanksAction = (tanks) => {
    return {
        type: SET_ADMIN_TANK_DATA,
        payload: tanks
    };
};

export const setAdminLevelsAction = (levels) => {
    return {
        type: SET_ADMIN_LEVELS_DATA,
        payload: levels
    };
};

export const setAdminClassesAction = (levels) => {
    return {
        type: SET_ADMIN_CLASSES_DATA,
        payload: levels
    };
};

export const setAdminNationsAction = (levels) => {
    return {
        type: SET_ADMIN_NATIONS_DATA,
        payload: levels
    };
};

export const getTanksData = () => {
    return async (dispatch) => {
        const response = await AdminAPI.getTanks();

        if (response.status === 200) {
            dispatch(setAdminTanksAction(response.data));
        }
    };
};

export const getAdminLevels = () => {
    return async (dispatch) => {
        const response = await AdminAPI.getLevels();

        if (response.status === 200) {
            dispatch(setAdminLevelsAction(response.data));
        }
    };
};

export const getAdminClasses = () => {
    return async (dispatch) => {
        const response = await AdminAPI.getClasses();

        if (response.status === 200) {
            dispatch(setAdminClassesAction(response.data));
        }
    };
};

export const getAdminNations = () => {
    return async (dispatch) => {
        const response = await AdminAPI.getNations();

        if (response.status === 200) {
            dispatch(setAdminNationsAction(response.data));
        }
    };
};

export const createTankData = (params, setSubmitting) => {
    return async () => {
        await AdminAPI.addTank(params);
        setSubmitting(false);
    };
};

export const editTankData = (params, setSubmitting) => {
    return async () => {
        await AdminAPI.editTank(params);
        setSubmitting(false);
    };
};

export const deleteTankData = (id, setSubmitting) => {
    return async () => {
        await AdminAPI.deleteTank(id);
        setSubmitting(false);
    };
};
