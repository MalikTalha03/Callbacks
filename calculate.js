// calculate.js

function performOperation(a, b, operation, callback) {
    const result = operation(a, b);
    callback(result);
}

function additionOperation(x, y) {
    return x + y;
}

function multiplicationOperation(x, y) {
    return x * y;
}

function callbackFunction(result) {
    console.log(`Callback function executed with result: ${result}`);
}

module.exports = {
    performOperation,
    additionOperation,
    multiplicationOperation,
    callbackFunction,
};
