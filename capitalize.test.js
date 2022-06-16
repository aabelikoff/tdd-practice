import capitalize from './capitalize';

test('Capitaliziing string', () => {
    expect(capitalize('string')).toMatch(/^S/);
});
test('Capitaliziing string with a gap in the begining', () => {
    expect(capitalize(' string')).toMatch(/^\W*S/);
});
test('Capitalizing string where first letter is not a word character', () => {
    expect(capitalize('_string')).toMatch(/^[^a-zA-Z]*S/);
});


