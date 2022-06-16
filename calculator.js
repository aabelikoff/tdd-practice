// Calculator object
const calculator = {
    add(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a - b;
    },
    divide(a, b) {
        if (b) {
            return a / b;
        }
        throw new Error('Cant divide by zero!');
    },
    miltuply(a, b) {
        return a * b;
    }
};

export default calculator;