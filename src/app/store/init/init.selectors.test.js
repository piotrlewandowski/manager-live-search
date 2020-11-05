import { isReady } from './init.selectors';

const state = {
  init: {
    ready: false,
  },
};

describe('Init selectors', () => {
  it('Should return the isReady flag from the state', () => {
    expect(isReady(state)).toEqual(false);
  });
});
