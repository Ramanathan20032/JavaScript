const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 success");
  }, 3000);
  //   setTimeout(() => {
  //     reject("p1 fails");
  //   }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 success");
  }, 1000);
  //   setTimeout(() => {
  //     reject("p2 fails");
  //   }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 success");
  }, 2000);
  //   setTimeout(() => {
  //     reject("p3 fails");
  //   }, 2000);
});

// if all are success, it return the result of array of all promises.
// it is similar to .all()
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// if any one of them fails.
// it wait for all promises to get settles(resolves or rejects).
// And return an array of objects with the result of the promises.
// success : [state, value]
// failure : [state, reasons]
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
