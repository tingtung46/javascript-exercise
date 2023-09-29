const removeFromArray = function(array, ...number) {
    return array.filter(numbers => !number.includes(numbers))
};

// Do not edit below this line
module.exports = removeFromArray;
