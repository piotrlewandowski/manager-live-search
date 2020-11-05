import { GET_INIT_DATA } from './init.action-types';
import { SUCCESS } from '../constants';
import { initReducer } from './init.reducer';
import { testReducerDefault } from '../../test/testReducerDefault';

const initialState = {
  ready: false,
};

describe('Init reducer', () => {
  it(`Should set ready flag to true for ${
    GET_INIT_DATA + SUCCESS
  } action`, () => {
    const action = {
      type: GET_INIT_DATA + SUCCESS,
      payload: 'test',
    };

    expect(initReducer(initialState, action)).toEqual({
      ready: true,
    });
  });

  testReducerDefault(initReducer, initialState);
});
