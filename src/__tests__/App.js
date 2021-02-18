import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  test('renders App component', () => {
    const nonExist = 'No such text';

    render(<App />);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});
