// Pretend this is data stored on a server (like an outside API)
const fakeServer = {
  id: 1,
  name: "Ridha",
  age: 29,
  country: "Indonesia",
};

// Pretend this is the API call (takes time to respond)
function fetchUserFromServer() {
  return new Promise(resolve => {
    setTimeout(() => resolve(fakeServer), 2000); // respond in 2 sec
  });
}

// Our async function to use API
async function login() {
  console.log("Logging in... contacting server...");

  const user = await fetchUserFromServer(); // wait for "API"
  console.log("User data received:", user);

  console.log(`Welcome ${user.name}!`);
}

login();
