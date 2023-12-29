import '@testing-library/jest-dom';
import operate from '../logic/operate';

describe('perform operations', () => {
  test('adds two numbers', () => {
    const sum = operate(2, 5, '+');
    expect(sum).toBe('7');
  });

  test('subtract two numbers', () => {
    const result = operate(2, 5, '-');
    expect(result).toBe('-3');
  });

  test('multiplies two numbers', () => {
    const product = operate(2, 5, 'x');
    expect(product).toBe('10');
  });

  test('divides two numbers', () => {
    const quotient = operate(2, 5, '÷');
    expect(quotient).toBe('0.4');
  });
});
