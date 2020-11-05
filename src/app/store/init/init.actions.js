import { APP_INIT, GET_INIT_DATA } from './init.action-types';
import { apiRequest } from '../apiRequest';
import { urls } from '../../config/dataSources';

export const appInit = (dispatch) => {
  dispatch({ type: APP_INIT });
};

export const getInitData = (dispatch) => {
  return apiRequest(dispatch, GET_INIT_DATA, urls.employees);
};
