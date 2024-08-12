// promise returned from function

// promise creation
// p1() is not called immediately. The Promise is created only when p1() is called inside handlePromise.
// p2() is also not called immediately. The Promise is created only when p2() is called inside handlePromise.

// The promises are created and their timers start only when the respective functions p1() and p2() are called.
// The total time for handlePromise to complete is 15 seconds (10 seconds for p1 and 5 seconds for p2 sequentially).
// The p2 timer doesn't start until the p1 timer has finished, resulting in a sequential delay.

function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved value 1");
    }, 10000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved value 2");
    }, 5000);
  });
}

async function handlePromise() {
  console.log("Hello World");
  const val = await p1();
  console.log("data1");
  console.log(val);

  const val1 = await p2();
  console.log("data2");
  console.log(val1);
}

handlePromise();

// if the promise, get return from the function,
// it take the seperate time for each promise.

// o/p :
// hello world

// after 10s...
// data 1
// Promise resolved value 1

// after the completion of that 10s
// it will take new 5s from that 10s...
// data 2
// Promise resolved value 2