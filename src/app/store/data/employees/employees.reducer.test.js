import { GET_INIT_DATA } from '../../init/init.action-types';
import { SUCCESS } from '../../constants';
import { employeesReducer } from './employees.reducer';
import { testReducerDefault } from '../../../test/testReducerDefault';
import { initialState } from './employees.reducer';
import mockData from '../../../config/mockData.json';

const mockState = {
  employees: mockData.data,
};
const mockStateCopy = { ...mockState.employees[0] };

describe('Employees reducer', () => {
  it(`Should add employees data for ${GET_INIT_DATA + SUCCESS} action`, () => {
    const action = {
      type: GET_INIT_DATA + SUCCESS,
      payload: {
        response: {
          data: {
            data: [mockState.employees[0]],
          },
        },
      },
    };

    expect(employeesReducer(mockState, action)).toEqual({
      employees: [mockStateCopy],
    });
  });

  testReducerDefault(employeesReducer, initialState);
});
