import reverseString from './reverseString';

test('Reverse string', () => {
    expect(reverseString(' Reverse this string.')).toMatch('.gnirts siht esreveR ');
});