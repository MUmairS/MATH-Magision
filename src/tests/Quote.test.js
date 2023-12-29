import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

describe('renders correctly', () => {
  test('render home-page', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });

  test('check title exist', () => {
    render(<Quote />);
    expect(
      screen.getByText(/Math is the source code of reality./i),
    ).toBeInTheDocument();
  });
});
