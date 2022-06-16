//Ranges: 65-90(U+0041 U+005A) and 97-122(U+0061 U+007A)
// Shifts a number within given range
function shiftNumberInRange(min, max, shift, number) {
    let dif = Math.abs(max - min) + 1;
    if (Math.abs(shift) > dif) {
        shift %= dif;
    }
    number += shift;
    if (number > max) {
        number = (min-max) + (number-1);
    }
    if (number < min) {
        number = (max - min) + (number + 1);
    }
    return number;
}
// Shifts char codes
function shiftCode(k, symbol) {
    if (symbol < 65
        || (symbol > 90 && symbol < 97)
        || symbol > 122) {
        return symbol;
    }
    if (symbol >= 65 && symbol <= 90) {
        return shiftNumberInRange(65, 90, k, symbol)
    }  
    if (symbol >= 97 && symbol <= 122) {
        return shiftNumberInRange(97, 122, k, symbol)
    }
}
// Ciphers a string using every character shifting(k)
function caesarCipher(string,k) {
    let charArray = string.split('');
    let codesArray = charArray.map((elem) => {
        return shiftCode(k, elem.charCodeAt(0));
    });
    return String.fromCharCode(...codesArray);
}

export default caesarCipher;