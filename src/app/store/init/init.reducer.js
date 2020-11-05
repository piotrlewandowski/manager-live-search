import { GET_INIT_DATA } from './init.action-types';
import { SUCCESS } from '../constants';

const initialState = {
  ready: false,
};

export const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INIT_DATA + SUCCESS:
      return {
        ready: true,
      };
    default:
      return state;
  }
};
