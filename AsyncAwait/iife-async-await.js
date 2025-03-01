(async function(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
  } catch(error){
    console.log(error);
  }
})();

References: https://www.freecodecamp.org/news/javascript-async-await/
