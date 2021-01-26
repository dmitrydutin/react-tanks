import { TanksAPI } from '../../api/api';

const SET_TANKS_DATA = 'SET_TANKS_DATA';
const SET_LEVELS_DATA = 'SET_LEVELS_DATA';
const SET_CLASSES_DATA = 'SET_CLASSES_DATA';
const SET_NATIONS_DATA = 'SET_NATIONS_DATA';

const initialState = {
    tanks: [],
    levels: [],
    classes: [],
    nations: []
};

export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TANKS_DATA:
            return {
                ...state,
                tanks: [...action.payload]
            };
        case SET_LEVELS_DATA:
            return {
                ...state,
                levels: [...action.payload]
            };
        case SET_CLASSES_DATA:
            return {
                ...state,
                classes: [...action.payload]
            };
        case SET_NATIONS_DATA:
            return {
                ...state,
                nations: [...action.payload]
            };
        default:
            return state;
    }
};

export const setTanksDataAction = (tanks) => {
    return {
        type: SET_TANKS_DATA,
        payload: tanks
    };
};

export const setLevelsAction = (levels) => {
    return {
        type: SET_LEVELS_DATA,
        payload: levels
    };
};

export const setClassesAction = (levels) => {
    return {
        type: SET_CLASSES_DATA,
        payload: levels
    };
};

export const setNationsAction = (levels) => {
    return {
        type: SET_NATIONS_DATA,
        payload: levels
    };
};

export const getTanks = (tLevel, tClass, tNation) => {
    return async (dispatch) => {
        const response = await TanksAPI.getTanks(tLevel, tClass, tNation);

        if (response.status === 200) {
            dispatch(setTanksDataAction(response.data));
        }
    };
};

export const getLevels = () => {
    return async (dispatch) => {
        const response = await TanksAPI.getLevels();

        if (response.status === 200) {
            dispatch(setLevelsAction(response.data));
        }
    };
};

export const getClasses = () => {
    return async (dispatch) => {
        const response = await TanksAPI.getClasses();

        if (response.status === 200) {
            dispatch(setClassesAction(response.data));
        }
    };
};

export const getNations = () => {
    return async (dispatch) => {
        const response = await TanksAPI.getNations();

        if (response.status === 200) {
            dispatch(setNationsAction(response.data));
        }
    };
};
