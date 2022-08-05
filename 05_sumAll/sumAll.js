const sumAll = function(a, b) {
    sum = 0;
    if (typeof a !== "number" || typeof b !== "number"
        || a < 0 || b < 0) {
        return "ERROR";
    }
    const upperBound = (a > b) ? a : b;
    const lowerBound = (upperBound === a) ? b : a;
    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
