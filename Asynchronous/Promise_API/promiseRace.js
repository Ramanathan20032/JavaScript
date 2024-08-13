const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 success");
  }, 3000);
  //   setTimeout(() => {
  //     reject("p1 fails");
  //   }, 3000);
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
  setTimeout(() => {
    resolve("p3 success");
  }, 2000);
  //   setTimeout(() => {
  //     reject("p3 fails");
  //   }, 2000);
});

// Returns the result (value) of the first settled(either success (or) failure) promise
// doesnt wait for other promise to get settles.

// if it settle(success) first, it return with value.
// if it settles(failure) first, it return with ERROR of that promise.
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
