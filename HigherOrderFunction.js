const radius = [3, 1, 4, 2];

// higher order function - function which take another function as an argument (or)
// return a function from it.

// area - callback function
const area = function (radius) {
  return Math.PI * radius * radius;
};

// circumference - callback function
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

// diameter - callback function
const diameter = function (radius) {
  return 2 * radius;
};

// calculate - higher order function
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(calculate(radius, area));

// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
