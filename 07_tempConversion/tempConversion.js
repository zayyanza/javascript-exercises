const convertToCelsius = function(num) {
  result = (num - 32) * 5/9;
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function(num) {
  result = num * 9/5 + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
