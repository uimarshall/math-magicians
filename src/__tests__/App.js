import '@testing-library/jest-dom'

import * as React from 'react'
import {render} from '@testing-library/react'
import App from '../components/App'


describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});