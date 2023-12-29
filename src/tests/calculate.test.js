import calculate from '../logic/calculate';

describe('test the calculation', () => {
  test('test the result of 2 + 5 should be equal to 7 ', () => {
    let obj = calculate({}, '2');
    obj = calculate(obj, '+');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('7');
  });

  test('test the result of 2 - 5 should be equal to -3 ', () => {
    let obj = calculate({}, '2');
    obj = calculate(obj, '-');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('-3');
  });

  test('test the result of 2 x 5 should be equal to 10 ', () => {
    let obj = calculate({}, '2');
    obj = calculate(obj, 'x');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('10');
  });

  test('test the result of 2 / 5 should be equal to 0.4 ', () => {
    let obj = calculate({}, '2');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('0.4');
  });
});
