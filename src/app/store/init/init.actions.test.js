import { APP_INIT } from './init.action-types';
import { appInit } from './init.actions';
import { testStandardAction } from '../../test/testStandardAction';

jest.mock('axios');

describe('Init actions', () => {
  describe(`${APP_INIT}`, () => {
    testStandardAction(appInit, APP_INIT);
  });

  // TODO: write API action test
});
