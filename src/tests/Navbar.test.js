import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('renders correctly', () => {
  test('render Navbar', () => {
    const nav = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(nav).toMatchSnapshot();
  });

  test('check title exist', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(
      screen.getByRole('heading', { name: /Math Magicians/i }),
    ).toBeInTheDocument();
  });
});
