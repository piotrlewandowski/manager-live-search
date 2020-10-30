import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
  it('renders the component', () => {
    render(<App />);

    const headerElement = screen.getByTestId('h1tag');

    expect(headerElement).toHaveTextContent(/manager live search/i);
  });
});
