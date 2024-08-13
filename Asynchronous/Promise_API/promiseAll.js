const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 success");
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

// if all are success, it return the result of array of all promises.
// And it wait for all of them to finish.
Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});

// if any one of them fails.
// As soon as any of the promise will get rejected, .all() throws an error.
// return by rejected promise.
// And it doesnt wait for other promises to get settles.
Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
