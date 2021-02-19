import Big from 'big.js';
import operator from '../logic/operate';

const numberOne = 5;
const numberTwo = 10;

test('the sum of two numbers', () => {
  expect(operator.operate(numberOne, numberTwo, '+')).toEqual(Big(15));
});
test('the sum of two numbers', () => {
  expect(operator.operate(numberOne, numberTwo, '+')).not.toEqual(Big(12));
});

test('the difference of two numbers', () => {
  expect(operator.operate(numberOne, numberTwo, '-')).toEqual(Big(-5));
});
test('the difference of two numbers', () => {
  expect(operator.operate(numberOne, numberTwo, '-')).not.toEqual(Big(5));
});

test('the division of two numbers', () => {
  expect(operator.operate(numberOne, numberTwo, '÷')).toEqual(Big(0.5));
});

test('the multiplication of two numbers', () => {
  expect(operator.operate(numberOne, numberTwo, 'X')).toStrictEqual(Big(50));
});

test('the percentage of two numbers', () => {
  expect(operator.operate(numberOne, numberTwo, '%')).toEqual(Big(0.5));
});
