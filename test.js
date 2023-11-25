
const calculator = require('./calculate'); // Corrected the module name

calculator.performOperation(5, 3, calculator.additionOperation, calculator.callbackFunction);

calculator.performOperation(5, 3, calculator.multiplicationOperation, calculator.callbackFunction);
