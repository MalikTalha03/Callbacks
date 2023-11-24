
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

// Using the callback functions
performOperation(5, 3, additionOperation, callbackFunction);
performOperation(5, 3, multiplicationOperation, callbackFunction);
