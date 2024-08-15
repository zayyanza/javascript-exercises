const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    } else {
        sum = 0;
        if (a < b) {
            for (let i = a; i <= b; i++) {
                sum += i;
            }
        } else if (a > b) {
            for (let i = a; i >= b; i--) {
                sum += i;
            }
        } else {
            sum += a;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
