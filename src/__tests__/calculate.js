import Big from 'big.js';
import calculations from '../logic/calculate';

test('- button', () => {
  const calculator = { total: '3', next: '6', operation: '-' };
  expect(calculations.calculate(calculator, '=')).toEqual({ total: Big(-3), next: null, operation: null });
});
test('- button', () => {
  const calculator = { total: '3', next: '6', operation: '-' };
  expect(calculations.calculate(calculator, '=')).not.toEqual({ total: Big(3), next: null, operation: null });
});

test('AC button', () => {
  const calculator = { total: '9', next: '3', operation: '+' };
  expect(calculations.calculate(calculator, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
});
test('AC button', () => {
  const calculator = { total: '9', next: '3', operation: '+' };
  expect(calculations.calculate(calculator, 'AC')).not.toStrictEqual({ total: Big(5), next: null, operation: null });
});

test('= button', () => {
  const calculator = { total: '3', next: '6', operation: '+' };
  expect(calculations.calculate(calculator, '=')).toEqual({ total: Big(9), next: null, operation: null });
});
test('÷ button', () => {
  const calculator = { total: '20', next: '2', operation: '÷' };
  expect(calculations.calculate(calculator, '=')).toEqual({ total: Big(10), next: null, operation: null });
});
test('÷ button', () => {
  const calculator = { total: '20', next: '2', operation: '÷' };
  expect(calculations.calculate(calculator, '=')).not.toEqual({ total: Big(11), next: null, operation: null });
});
test('÷ button', () => {
  const calculator = { total: '9', next: '0', operation: '÷' };
  expect(calculations.calculate(calculator, '=')).toEqual({ total: '∞', next: null, operation: null });
});

test('operation symbol button', () => {
  const calculator = { total: '8', next: null, operation: '%' };
  expect(calculations.calculate(calculator, '%')).toStrictEqual({ total: Big(0.08), next: null, operation: null });
});

test('operation with full calculator object', () => {
  const calculator = { total: '10', next: '3', operation: '+' };
  expect(calculations.calculate(calculator, '+')).toStrictEqual({ total: Big(13), next: null, operation: '+' });
});

test('next without operation', () => {
  const calculator = { total: '3', next: '6', operation: null };
  expect(calculations.calculate(calculator, '+')).toStrictEqual({ total: '6', next: null, operation: '+' });
});

test('only operation button', () => {
  const calculator = { total: '7', next: null, operation: null };
  expect(calculations.calculate(calculator, '+')).toStrictEqual({ total: '7', next: null, operation: '+' });
});

test('+/- button with next without total', () => {
  const calculator = { total: null, next: '8', operation: null };
  expect(calculations.calculate(calculator, '+/-')).toStrictEqual({ total: null, next: Big('-8'), operation: null });
});

test('+/- button with total', () => {
  const calculator = { total: '8', next: null, operation: null };
  expect(calculations.calculate(calculator, '+/-')).toStrictEqual({ total: Big('-8'), next: null, operation: null });
});

test('only next', () => {
  const calculator = { total: null, next: '5', operation: null };
  expect(calculations.calculate(calculator, '5')).toStrictEqual({ total: null, next: '55', operation: null });
});

test('without next', () => {
  const calculator = { total: null, next: null, operation: null };
  expect(calculations.calculate(calculator, '6')).toStrictEqual({ total: null, next: '6', operation: null });
});
