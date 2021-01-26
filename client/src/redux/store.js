import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { AuthReducer } from './reducers/AuthReducer';
import { HomeReducer } from './reducers/HomeReducer';
import { TankInfoReducer } from './reducers/TankInfoReducer';
import { AdminReducer } from './reducers/AdminReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    home: HomeReducer,
    tankInfo: TankInfoReducer,
    admin: AdminReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
