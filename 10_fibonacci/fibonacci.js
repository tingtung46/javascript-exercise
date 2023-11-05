const fibonacci = function(number) {
    let num = parseInt(number)
    let num0 = 0;
    let num1 = 1;
    let result;

    if (num < 0) return 'OOPS';
    for (i = 1; i < num; i++) {
        result = num0 + num1;
        num0 = num1;
        num1 = result;
    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
