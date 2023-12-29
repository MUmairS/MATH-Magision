import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('renders correctly', () => {
  test('render calculator-page', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });

  test('check title exist', () => {
    render(<Calculator />);
    expect(
      screen.getByRole('heading', { name: /Let's do some math!/i }),
    ).toBeInTheDocument();
  });
});
