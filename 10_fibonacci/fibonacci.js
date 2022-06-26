const fibonacci = function(input) {
    let x;
    // changes a string number to an integer
    if (typeof input === 'string') {
        x = parseInt(input);
    } else {
        x = input;
    };
    const fib = [0,1];
    if (x >= 0) {
        for (let i = 2; i <=x; i++) {
            fib[i] = fib[i-2] + fib[i-1];
        };
        return fib[x];
    } else {return "OOPS"}
};

// Do not edit below this line
module.exports = fibonacci;
