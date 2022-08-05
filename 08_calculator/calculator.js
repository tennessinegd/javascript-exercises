const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(numArray) {
    let sum = 0;
    numArray.forEach(element => sum += element);
    return sum;
};

const multiply = function(numArray) {
    let product = 1;
    numArray.forEach(element => product *= element);
    return product;
};

const power = function(x, y) {
    return x ** y;
};

const factorial = function(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
