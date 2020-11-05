import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../_helpers/configureStore';

const Providers = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export const renderWithProviders = (ui, options) => {
  render(ui, { wrapper: Providers, ...options });
};
