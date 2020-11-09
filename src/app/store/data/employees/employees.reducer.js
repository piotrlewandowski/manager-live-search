import { GET_INIT_DATA } from '../../init/init.action-types';
import { SUCCESS } from '../../constants';

export const initialState = {
  employees: [],
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INIT_DATA + SUCCESS:
      return {
        employees: action.payload.response.data.data.map((employee) => ({
          id: employee.id,
          attributes: {
            name: employee.attributes.name,
            email: action.payload.response.data.included.filter(
              (_) => _.id === employee.relationships.account.data.id,
            )[0].attributes.email,
            initials:
              [...employee.attributes.firstName][0].toUpperCase() +
              [...employee.attributes.lastName][0].toUpperCase(),
          },
        })),
      };
    default:
      return state;
  }
};
