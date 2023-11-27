const add = (num1,num2) => num1 + num2;
const sub = (num1,num2) => num1 - num2;
const mul = (num1,num2) => num1 * num2;
const div = (num1,num2) => num1 / num2;

module.exports = {add, sub, mul, div};

/* we could also use :
  exports.add = (num1,num2) => num1 + num2;
  exports.sub = (num1,num2) => num1 - num2;
  exports.mul = (num1,num2) => num1 * num2;
  exports.div = (num1,num2) => num1 / num2;
*/