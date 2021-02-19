import React from 'react';
import { render, screen } from '@testing-library/react';

import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('renders Calculator component', () => {
    render(<Calculator />);

    expect(screen.getByText(/Let’s do some math!/)).toBeInTheDocument();
  });
});
