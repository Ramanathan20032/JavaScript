const API_url = "https://invalid";

async function handlePromise() {
  try {
    const data = await fetch(API_url);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();

handlePromise().catch(err => console.log(err));
// returns a promise