// Reverses given string
const reverseString = function (string) {
    let charArray = string.split('');
    return charArray.reduceRight((resStr, char) => {
        return resStr + char;
    }, '');
};
export default reverseString;