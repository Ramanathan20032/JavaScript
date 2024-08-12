const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise ressolved value");
  }, 10000);
});

async function handlePromise() {
  console.log("Hello");

  const data1 = await p;
  console.log("data");
  console.log(data1 + " 1");

  const data2 = await p;
  console.log("data");
  console.log(data2 + " 2");
}
handlePromise();
