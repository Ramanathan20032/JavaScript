const API_url = "https://api.github.com/users/Ramanathan20032";

async function handlePromise() {
  const data = await fetch(API_url);
  const jsonValue = await data.json();
  console.log(jsonValue);
  console.log(jsonValue.name);
  console.log(jsonValue.login);
}
