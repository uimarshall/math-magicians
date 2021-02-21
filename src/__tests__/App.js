/* eslint-disable import/no-duplicates */
import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../components/App';
import Link from '../components/App';

describe('App', () => {
  test('renders App component', () => {
    const nonExist = 'No such text';

    render(<App />);

    expect(screen.queryByText(nonExist)).toBeNull();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Link to="/">Home</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Link to="/calculator">Calculator</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Link to="/quote">Quote</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
