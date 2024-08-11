// async function

async function getData() {
  return "Hello World";
  // if the function returns a non-promise value. instead of returing a promise 
  // then non-promise value automatically wrap inside the promise and return a "Promise".
}

const p = new Promise(function (ressolve, reject) {
  ressolve("Promise ressolved value");
});

async function getData() {
  // if itself return as promise, it will not wrap into promise, it will return as it is.
  return p;
}

const data = getData();
console.log(data)
data.then((res) => console.log(res));
