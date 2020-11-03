import { initReducer } from './init.reducer';
import { testReducerDefault } from '../testReducerDefault';

const initialState = {};

describe('Init reducer', () => {
  testReducerDefault(initReducer, initialState);
});
