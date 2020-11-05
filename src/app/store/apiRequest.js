import axios from 'axios';
import { REQUEST, SUCCESS, CANCELLED, FAILURE } from './constants';

export const apiRequest = async (
  dispatch,
  actionType,
  url,
  params = {},
  method = 'get',
  throwOnError = true,
) => {
  dispatch({
    type: actionType + REQUEST,
    payload: { method, url, params },
  });

  const cancelTokenSource = axios.CancelToken.source();
  const config = { method, url, params, cancelToken: cancelTokenSource.token };

  try {
    const response = await axios.request(config);

    handleSuccess(response, dispatch, actionType, params);

    return { response, cancelTokenSource };
  } catch (error) {
    handleFailure(error, dispatch, actionType, params, throwOnError);
    console.error(error);
  }
};

const handleSuccess = (response, dispatch, actionType, params) => {
  const action = {
    type: actionType + SUCCESS,
    payload: {
      params,
      response,
    },
  };

  dispatch(action);

  return action;
};

const handleFailure = (
  response,
  dispatch,
  actionType,
  params,
  throwOnError,
) => {
  const action = {
    type: actionType + (axios.isCancel(response) ? CANCELLED : FAILURE),
    payload: {
      errors: response && response.data && response.data.errors,
      params,
      response,
      status: response.status || (axios.isCancel(response) ? -1 : 0),
    },
  };

  dispatch(action);

  if (throwOnError) {
    throw action;
  } else {
    return action;
  }
};
