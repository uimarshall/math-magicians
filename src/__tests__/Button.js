import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';

const handleClick = () => { ''; };

it('renders the button correctly', () => {
  const { getByTestId } = render(<Button name="9" wide={false} clickHandler={handleClick} />);

  expect(getByTestId('button')).toHaveTextContent('9');
});
it('renders the button correctly with different button name', () => {
  const { getByTestId } = render(<Button name="6" wide={false} clickHandler={handleClick} />);

  expect(getByTestId('button')).toHaveTextContent('6');
});
it('renders the button correctly', () => {
  const { getByTestId } = render(<Button name="9" wide={false} clickHandler={handleClick} />);

  expect(getByTestId('button')).not.toHaveTextContent('&');
});
test('renders the button texts correctly', () => {
  const { getByText } = render(<Button name="=" wide={false} clickHandler={handleClick} />);
  const equalButton = getByText(/=/i);
  expect(equalButton).toBeInTheDocument();
});

test('the button roles are button', () => {
  const { getByRole } = render(<Button name="=" wide={false} clickHandler={handleClick} />);
  const buttonRole = getByRole('button');
  expect(buttonRole).toBeInTheDocument();
});
