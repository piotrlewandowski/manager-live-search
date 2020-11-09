import React from 'react';
import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../test/renderWithProviders';
import { SearchForm } from './SearchForm';

jest.mock('axios');

describe('<SearchForm />', () => {
  it('Renders <SearchForm /> component correctly', async () => {
    renderWithProviders(<SearchForm />);

    const formElement = screen.getByTestId('search-form');

    await waitFor(() => {
      expect(formElement).toBeInTheDocument();
    });
  });
});
