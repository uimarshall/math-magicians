import React from 'react';
import { render, screen } from '@testing-library/react';

import Quote from '../components/Quote';

describe('Quote', () => {
  test('renders Quote component', () => {
    render(<Quote />);

    expect(screen.getByText(/Mathematics/)).toBeInTheDocument();
  });
});
