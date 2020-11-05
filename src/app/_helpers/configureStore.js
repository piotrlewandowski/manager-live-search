import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../store/rootReducer';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

export const initialState = {};

export const configureStore = () => {
  const middlewares = [loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../store/rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export const store = configureStore();
