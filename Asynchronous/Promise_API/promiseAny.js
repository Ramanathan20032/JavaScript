const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("p1 success");
  //   }, 3000);
  setTimeout(() => {
    reject("p1 fails");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("p2 success");
  //   }, 1000);
  setTimeout(() => {
    reject("p2 fails");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("p3 success");
  //   }, 2000);
  setTimeout(() => {
    reject("p3 fails");
  }, 2000);
});

// seeking for the first settled success.
// .any() will wait for the first promise to get settled "successfully".
// and return the value of the promise.

// if all the promises get failed.
// after 3s, it returns the result of "aggregate Error".
// aggregate Error - aggregating the array of all three(promises) error.
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
