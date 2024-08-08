const arr = [3, 1, 5, 2, 4];

// to find sum
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

// using reduce
const Sum = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(Sum);

// to find max
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

// using reduce
const Max = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(Max);
