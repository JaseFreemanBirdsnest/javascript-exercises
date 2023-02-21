const add = function(a,b){
  return result = a + b;
}

const subtract = function(a, b) {
	return result = a - b;
};

const sum = function(ary) {
  return result = ary.reduce((tot, num) => tot + num, 0);
};

const multiply = function(ary) {
  return result = ary.reduce((tot, num) => tot * num);
};

const power = function(a,b) {
	return result = a ** b;
};

const factorial = function fact(x) {
	if (x == 0 || x == 1){
    return 1;
  }
  return fact(x-1)*x;
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
