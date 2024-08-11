// promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved Value");
  }, 10000);
});

// using async/await
// await can be only used inside the async function.
async function handlePromise() {
  console.log("Hello world");
  const val = await p;
  // js engine wait for promise to ressolved
  // once the promise get ressolved, then it will executed from the next line
  console.log("start");
  console.log(val + " 2"); // promise resolved value.
  console.log("end");
}
handlePromise();

// op:
// hello world
// after 10 sec
// start
// Promise resolved Value
// end

// using promises
function getData() {
  // JS engine will not wait for promise to be ressolved.
  console.log("start");
  // this promise will be ressolved after 10sec
  p.then((res) => console.log(res + " 1")); // promise resolved value.
  console.log("end");
}
getData();

// op:
// start
// end
// Promise resolved Value