// promise created with variable.

// promise creation
// p1 is created immediately and starts the 5-second timer.
// p2 is also created immediately and starts the 10-second timer.

// Both promises start their timers simultaneously as soon as they are created.
// The total time for handlePromise to complete is 10 seconds (since p1 takes 5 seconds and p2 takes 10 seconds).
// Even though the await p1 delays the code's execution, the p2 timer is still running in the background.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value 1");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value 2");
  }, 10000);
});

// if the promise, get return from the variable,
// it take the time continously

// o/p :
// hello world

// after 5s
// data 1
// Promise resolved value 1

// after 10s -> 5s(prev) + 5s
// data 2
// Promise resolved value 2

async function handlePromise() {
  console.log("Hello World");
  const val = await p1;
  console.log("data1");
  console.log(val);

  const val1 = await p2;
  console.log("data2");
  console.log(val1);
}

handlePromise();

// ---------------------------------------------------

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value 1");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value 2");
//   }, 5000);
// });

// for this

// o/p :
// hello world

//// after 10s...
// data 1
// Promise resolved value 1

//// after the completion of 10s promise
//// then 5s will be already resolves in that 10s...
// data 2
// Promise resolved value 2