const arr = [3, 1, 5, 2, 6];

// filter odd numbers
const odd = arr.filter((x) => {
  return x % 2 !== 0;
});
console.log(odd);

// filter even numbers
const even = arr.filter((x) => x % 2 === 0);
console.log(even);

// greater than 4
const greaterThan4 = arr.filter((x) => x > 4);
console.log(greaterThan4);

// less than 3
const lessThan = arr.filter((x) => x < 3);
console.log(lessThan);
