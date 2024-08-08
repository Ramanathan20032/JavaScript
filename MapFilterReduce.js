const arr = [-1, -6, 4, 7, -3, -2, -8, 5, 9];
// sum of positive numbers.

const sumOfPositive = arr
  .filter((x) => x > -1)
  .reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  }, 0);
console.log(sumOfPositive);

const num = [4, 5, 7, 3, 10];
// double the even number & sum of them

const evenSum = num
  .filter((x) => x % 2 == 0)
  .map((x) => x * 2)
  .reduce((acc, cur) => {
    acc = acc + cur;
  }, 0);
console.log(evenSum);


const users = [
  { firstName: "sachin", lastName: "Tendulkar", age: 51 },
  { firstName: "Rohit", lastName: "Sharma", age: 37 },
  { firstName: "virat", lastName: "kolhi", age: 35 },
  { firstName: "KL", lastName: "Rahul", age: 32 },
  { firstName: "Mohammed", lastName: "Shami", age: 32 },
];

// get the first name & last name of all objects
const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);

// find how many users have a particular age ?
// here we need to find one value - so, reduce().
// { '32': 2, '35': 1, '37': 1, '51': 1 }
const result = users.reduce((acc, cur) => {
  if (acc[cur.age]) {
    acc[cur.age] = ++acc[cur.age];
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});

console.log(result);

// To Find the first name of all people in array whose age is less than 40.
// by using filter, map.
const ans = users.filter((x) => x.age < 40).map((x) => x.firstName);
console.log(ans);

// by using reduce.
const ans1 = users.reduce((acc, cur) => {
  if (cur.age < 40) {
    acc.push(cur.firstName);
  }
  return acc;
}, []);
console.log(ans1);
