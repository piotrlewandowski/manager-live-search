import { GET_INIT_DATA } from '../../init/init.action-types';
import { SUCCESS } from '../../constants';
import { employeesReducer } from './employees.reducer';
import { testReducerDefault } from '../../../test/testReducerDefault';
import { initialState } from './employees.reducer';
import mockData from '../../../config/mockData.json';

const mockState = {
  employees: [
    {
      id: '323',
      attributes: {
        name: 'Harriet McKinney',
        email: 'harriet.mckinney@kinetar.com',
        initials: 'HM',
      },
    },
  ],
};

describe('Employees reducer', () => {
  it(`Should add employees data for ${GET_INIT_DATA + SUCCESS} action`, () => {
    const action = {
      type: GET_INIT_DATA + SUCCESS,
      payload: {
        response: {
          data: {
            data: [mockData.data[0]],
            included: mockData.included,
          },
        },
      },
    };

    expect(employeesReducer(mockData, action)).toEqual({
      employees: mockState.employees,
    });
  });

  testReducerDefault(employeesReducer, initialState);
});
