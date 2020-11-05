import { GET_INIT_DATA } from '../../init/init.action-types';
import { SUCCESS } from '../../constants';

export const initialState = {
  employees: [],
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INIT_DATA + SUCCESS:
      return {
        ...state,
        employees: action.payload.response.data.data,
      };
    default:
      return state;
  }
};
