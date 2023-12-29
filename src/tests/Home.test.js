import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('renders correctly', () => {
  test('render home-page', () => {
    const homePage = render(<Home />);
    expect(homePage).toMatchSnapshot();
  });

  test('check title exist', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /Welcome to our page!/i }),
    ).toBeInTheDocument();
  });
});
