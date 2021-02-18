import React from 'react';
import { render } from '@testing-library/react';
import Display from '../components/Display';

test('renders the Display text correctly', () => {
  const { getByText } = render(<Display result="38" />);
  const displayResult = getByText(/38/i);
  expect(displayResult).toBeInTheDocument();
});
