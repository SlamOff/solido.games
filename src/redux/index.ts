import { combineReducers } from 'redux';

import { walletReducer } from './walletReducer';

export const rootReducer = combineReducers({
    wallet: walletReducer
});