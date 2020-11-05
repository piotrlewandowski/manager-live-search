import { combineReducers } from 'redux';

import { initReducer } from './init/init.reducer';
import { employeesReducer } from './data/employees/employees.reducer';

export const rootReducer = combineReducers({
  init: initReducer,
  data: employeesReducer,
});
