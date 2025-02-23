 // Polyfill - used to provide modern functionality on older browsers.
if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}

// References:
// https://javascript.info/polyfills
