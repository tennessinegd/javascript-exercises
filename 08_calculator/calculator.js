const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const sum = numArray => numArray.reduce((total, current) => total + current, 0);

const multiply = numArray => numArray.reduce((total, current) => total * current, 1);

const power = (x, y) => x ** y;

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
