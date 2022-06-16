// Finds average number
function average(arr) {
    let sum = arr.reduce((s, elem) => {
        return s + elem;
    }, 0);
    return sum / arr.length;
}
// Finds min and max element in given array
function minMaxElement(arr) {
    arr.sort((a, b) => {
        return a - b;
    });
    return [arr[0], arr[arr.length - 1]];
}

function analyzeArray(arr) {
    return {
        average: average(arr),
        min: minMaxElement(arr)[0],
        max: minMaxElement(arr)[1],
        length: arr.length
    }
}

export default analyzeArray;