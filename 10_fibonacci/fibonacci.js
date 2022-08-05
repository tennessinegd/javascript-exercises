const fibonacci = function(order) {

    order = +order;
    
    if (order < 0) {
        return "OOPS";
    }

    if (order === 1 || order === 2) {
        return 1;
    }    

    const sequence = [1, 1];
    let result;

    for (let i = 3; i <= order; i++) {
        result = sequence.shift() + sequence[0];
        sequence.push(result);
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
