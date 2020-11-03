import { combineReducers } from 'redux';

import { initReducer } from './init/init.reducer';

export const rootReducer = combineReducers({
  init: initReducer,
});
