const fibonacci = function(num) {
    let int = parseInt(num);
    let fibonacci = [];

    if (int === 0) {
        return 0;
    }

    if (int < 0) {
        return "OOPS";
    }

    for(let i = 0; i < int; i++) {
        if (fibonacci.length < 2) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2])
        }
    }
    return fibonacci[fibonacci.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
