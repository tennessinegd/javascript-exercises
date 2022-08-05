const removeFromArray = function(array, ...removedItems) {
    for (item of removedItems) {
        let itemIndex = array.indexOf(item);
        if (itemIndex === -1) continue;
        array.splice(itemIndex, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
