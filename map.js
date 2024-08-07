const arr = [3, 1, 5, 2, 4];

// double
const double = arr.map((x) => {
  return x * 2;
});
console.log(double);

// Triple
const triple = arr.map((x) => {
  return x * 3;
});
console.log(triple);

const binary = arr.map((x) => x.toString(2));
console.log(binary);
