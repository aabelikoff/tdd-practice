import calculator from './calculator';

test('Calculator. Add integer.', () => {
    expect(calculator.add(3, 11)).toEqual(14);
});

test('Calculator. Add float.', () => {
    expect(calculator.add(1.3, 11.1)).toBeCloseTo(12.4);
});

test('Calculator. Substract integer.', () => {
    expect(calculator.substract(3, 11)).toEqual(-8);
});

test('Calculator. Substract float.', () => {
    expect(calculator.substract(1.3, 11.1)).toBeCloseTo(-9.8);
});

test('Calculator. Divide integer.', () => {
    expect(calculator.divide(99, 11)).toEqual(9);
});

test('Calculator. Divide  float.', () => {
    expect(calculator.divide(12.4, 2)).toBeCloseTo(6.2);
});

test('Calculator. Divide  zero.', () => {
    expect(() => calculator.divide(12, 0)).toThrow();
});

test('Calculator. Multiply  integer.', () => {
    expect(calculator.miltuply(12, 2)).toEqual(24);
});

test('Calculator. Multiply  float.', () => {
    expect(calculator.miltuply(12.3, 1.2)).toBeCloseTo(14.76);
});