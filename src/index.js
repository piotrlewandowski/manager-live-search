import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ErrorBoundary } from './ErrorBoundary';
import { App } from './app';

import { store } from './app/_helpers/configureStore';

import './styles/main.scss';

const render = () => {
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>,
    document.getElementById('app'),
  );
};

// Enable Webpack hot module replacement
if (module.hot) {
  module.hot.accept('./app', () => {
    render();
  });
}

render();
