import { TanksAPI } from '../../api/api';

const SET_TANK_DATA = 'SET_TANK_DATA';

const initialState = {
    tank: {}
};

export const TankInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TANK_DATA:
            return {
                ...state,
                tank: { ...action.payload }
            };
        default:
            return state;
    }
};

export const setTankDataAction = (tank) => {
    return {
        type: SET_TANK_DATA,
        payload: tank
    };
};

export const getTank = (id) => {
    return async (dispatch) => {
        const response = await TanksAPI.getTank(id);

        if (response.status === 200) {
            dispatch(setTankDataAction(response.data));
        }
    };
};
