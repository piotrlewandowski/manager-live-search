/**
 * Tests a standard action.
 * @param {function} actionToTest - The action you want to test
 * @param {string} actionType - The action type of the action (imported from your action-types.js file)
 * @param {*} expectedPayload - The payload you expect the action to have
 */
export const testStandardAction = (
  actionToTest,
  actionType,
  expectedPayload,
) => {
  it('Should dispatch an action with expected type and payload', () => {
    const dispatch = jest.fn();

    actionToTest(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual(actionType);
    expect(dispatch.mock.calls[0][0].payload).toEqual(expectedPayload);
  });
};
