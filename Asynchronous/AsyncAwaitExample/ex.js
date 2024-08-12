// promise
function promise() {
  return new Promise((ressolve, reject) => {
    setTimeout(() => {
      ressolve("Promise ressolved value");
    }, 10000);
  });
}

// using Promise
function getData() {
  console.log("start");
  promise().then((res) => console.log(res));
  console.log("end");
}
getData();

// o/p ::
// start
// end
//// after 10 sec...
// Promise ressolved value

// using async/await
async function handlePromise() {
  console.log("hello");
  const data = await promise();
  console.log("start");
  console.log(data);
  console.log("end");
}
handlePromise();

// o/p ::
// hello
//// after 10 sec...
// start
// Promise ressolved value
// end