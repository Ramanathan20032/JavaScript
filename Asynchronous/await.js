const p = new Promise((ressolve, reject) => {
  setTimeout(() => {
    ressolve("Promise resolved value");
  }, 10000);
});

// using async/await
// async/await is used to handle promises.
async function getData() {
  // await can only used inside Async function.
  const data = await p;
  // await keyword used infront of promise, it wait for the promise to get settled.
  console.log(data);
}
getData();
