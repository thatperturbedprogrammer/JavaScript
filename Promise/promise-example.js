// The Promise Object represents the eventual fulfillment or rejection of our promise and holds the resulting values. 
// In the meantime, while we're waiting for the promise to be fulfilled, our code continues executing.

// Promises are the most popular modern way to write asynchronous code in JavaScript.

const promise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    if(getRandomBool()){
      resolve("resolved!");
    }
    else{
      reject("rejected!");
    }
  }, 1000);
});

function getRandomBool(){
  return Math.random() < .5;
}

// References:
// https://www.freecodecamp.org/news/http-full-course/
