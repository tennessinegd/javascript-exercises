const ftoc = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    let roundedResult = Math.round(celsius * 10) / 10;
    return roundedResult;
};

const ctof = function(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    roundedResult = Math.round(fahrenheit * 10) / 10;
    return roundedResult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
