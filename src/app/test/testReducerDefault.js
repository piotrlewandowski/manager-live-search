/**
 * Tests the default case of the reducer
 * @param {reducer} reducer - The reducer to test
 * @param {*} initialState - The initial state to pass to the reducer
 */
export const testReducerDefault = (reducer, initialState) => {
  it('Should return current state', () => {
    const action = {
      type: 'TEST_UNKNOWN_ACTION',
      payload: 'test',
    };

    const initialStateCopy = { ...initialState };

    expect(reducer(initialState, action)).toEqual(initialStateCopy);
  });
};
