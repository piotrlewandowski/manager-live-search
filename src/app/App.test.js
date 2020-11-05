import React from 'react';
import { screen, waitFor } from '@testing-library/react';

import { App } from './App';
import { renderWithProviders } from './test/renderWithProviders';

describe('<App />', () => {
  it('renders the component', async () => {
    renderWithProviders(<App />);

    const headerElement = screen.getByTestId('h1tag');

    await waitFor(() => {
      expect(headerElement).toHaveTextContent(/manager live search/i);
    });
  });
});
