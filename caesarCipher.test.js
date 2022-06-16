import caesarCipher from './caesarCipher';

test('Caesar cipher simple', () => {
    expect(caesarCipher('azAZ bkoM ', 1)).toEqual('baBA clpN ');
});

test('Caesar cipher negative shifting', () => {
    expect(caesarCipher('azAz bkoM,', -1)).toEqual('zyZy ajnL,');
});

test('Caesar cipher big shift 26', () => {
    expect(caesarCipher('azAZ bkoM ', 26)).toEqual('azAZ bkoM ');
});

test('Caesar cipher big shift 27', () => {
    expect(caesarCipher('azAZ bkoM ', 27)).toEqual('baBA clpN ');
});

test('Caesar cipher big negative shift -26', () => {
    expect(caesarCipher('azAZ bkoM ', -26)).toEqual('azAZ bkoM ');
});

test('Caesar cipher big negative shift -27', () => {
    expect(caesarCipher('baBA clpN ', -27)).toEqual('azAZ bkoM ');
});

test('Caesar cipher big shift 53', () => {
    expect(caesarCipher('azAZ bkoM ', 53)).toEqual('baBA clpN ');
});

test('Caesar cipher big negative shift -53', () => {
    expect(caesarCipher('baBA clpN ', -53)).toEqual('azAZ bkoM ');
});
