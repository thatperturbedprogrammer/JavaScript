// The Promise object has .then and .catch that make it easy to work with. 
// Think of .then as the expected follow-up to a promise, 
// and .catch as the "something went wrong" follow-up.

promise.then((message)=> {
  console.log(`The promise finally ${message}`);
}).catch((message)=> {
  console.log(`The promise finally ${message}`);
});

// prints:
// The promise finally resolved!
// or
// the promise finally rejected!
