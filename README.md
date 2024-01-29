#Questions

1. What is NPM?
NPM is a package manager for JavaScript that is used to manage packages in the Node.js environment
2. What is SPA?
Single Page Application is a type of web application that rewrites a current page with new data from a web server instead of reloading an entirely new page
3. What is the event loop?
In JavaScript, the event loop is a mechanism that allows for asynchronous code execution. It is responsible for maintaining flow of control
4. What is the difference between export x and export default x? How do you import them differently?
Export x means that multiple variables, functions can be exported as separate entities, and each one can be given named differently. During import the exact same names used during export must be used.
Export default x is a way of sharing a values or function from a file as the main thing from the file. If a file is needed in other parts of the application, it can be marked using export default x.
5. Why do you use className as a property in React and not class?
The JavaScript keyword class would cause a clash and because JSX is a JavaScript extension and used in React then className is what is used to avoid conflicts
6. Why should you not write the following? What will happen?
    <button onClick={setCounter(counter + 1)}> +1 </button>
The problem with this code is that the setCounter function is invoked immediately when rendering the component instead of passing it as a callback on the onClick event handler. 
7. What is object deconstruction and how is it connected to React components (example)?
Object deconstruction is the process of assigning variables by extraction of values from objects. It makes the code more succint and generally improves readability. In the context of React components, object deconstruction is used to extract values from props and state objects . For example

var object = { one: 1, two: 2, three: 3 }
var one = object.one;var two = object.two;var three = object.three
console.log(one, two, three)

These are long sentences that take up space. Using object deconstruction would be:
let object = { one: 1, two: 2, three: 3 }
let { one, two, three } = object;
console.log(one, two, three) // it prints 1 2 3
8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
This is made possible by the JavaScript extension JSX that allows for HTML-like code to be written together with JavaScript. JSX is transpiled into JavaScript using the Babel tool. Afterwards it is transformed into React.createElement function calls.
9. What is async/await? Bring an example
The async keyword is used with a function to show that the function is asynchronous. The use of await keyword pauses the function until a promise is resolved or rejected. // A function that returns a Promise that resolves after a delay
function del(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Delayed for ${ms} milliseconds`);
    }, ms);
  });
}

// An async function using async/await to handle asynchronous code more synchronously
async function exampleAsyncFunction() {
  console.log('Start of async function');
  
  try {
    const result1 = await del(1000);
    console.log(result1);

    const result2 = await del(2000);
    console.log(result2);
  } catch (error) {
    console.error('An error occurred:', error);
  }

  console.log('End of async function');
}

// Call the async function
exampleAsyncFunction();

The function is called and the delays occur sequentially despite being asynchronous
10. What is a Promise? Bring an example
A promise is an object that represents eventual completion or failure of an asychronous operation. 
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

In this example, a promise is created that takes two functions: resolve and reject. If the process is successful the resolve function is used and if the process is unsuccessful the reject function is used.