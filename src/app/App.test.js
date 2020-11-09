import React from 'react';
import { screen, waitFor } from '@testing-library/react';

import { App } from './App';
import { renderWithProviders } from './test/renderWithProviders';

describe('<App />', () => {
  it('Renders <App /> component correctly', async () => {
    renderWithProviders(<App />);

    const wrapperElement = screen.getByTestId('app-wrapper');

    await waitFor(() => {
      expect(wrapperElement).toBeInTheDocument();
    });
  });
});
