// While the await keyword can be used in place of .then() to resolve a promise,
// the async keyword can be used in place of new promise() to create a new promise.

// When a function is prefixed with the async keyword, it will automatically return a promise. 
// That promise resolves with the value that your code returns from the function. 
// You can think of async as "wrapping" your function within a promise.


// using Promise
function getPromiseForUserData(){
  return new Promise((resolve) => {
    fetchDataFromServerAsync().then(function(user){
      resolve(user)
    })
  })
}

const promise = getPromiseForUserData()


// using async
async function getPromiseForUserData(){
  const user = await fetchDataFromServer();
  return user // return resolved user data
}

const promise = getPromiseForUserData();
