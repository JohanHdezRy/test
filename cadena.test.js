const cadenaInversa = require('./cadena');
test('invierte la cadena "hola" a "aloh"', () => {
    expect(cadenaInversa('hola')).toBe('aloh');
});
test('invierte la cadena vacia a cadena vacia', () => {
    expect(cadenaInversa('')).toBe('');
});
test('invierte la cadena con espacios "abc def" a "fed cba"', () => {
    expect(cadenaInversa('abc def')).toBe('fed cba');
});
