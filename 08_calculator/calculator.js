const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i ++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i < array.length; i ++) {
    product *= array[i];
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
	let result = 1;
  for (let i = x; i > 0; i--) {
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
