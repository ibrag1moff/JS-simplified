import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";
import ProTip from "@/widgets/Protip";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function FunctionsPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title={"Functions"} />

        <Article>
          <p>
            In JavaScript, functions are one of the most important building
            blocks of the language. A function is a reusable block of code that
            performs a specific task. Instead of repeating the same lines of
            code over and over, you can define a function once and call it
            whenever you need it. This makes your code cleaner, more organized,
            and easier to maintain.
          </p>

          <p>
            In this chapter, you’ll learn how to define functions, call them,
            pass data to them, return results in JavaScript
          </p>
        </Article>

        <Article title={"Declaring and Calling a Function"}>
          <p>
            In JavaScript, a function is defined using the function keyword,
            followed by the name of the function, a list of parameters inside
            parentheses, and the function body inside curly braces.
          </p>

          <CodeDisplay
            code={`
function sayHello(name) {
  console.log("Hello, " + name + "!");
}
        `}
          />

          <p>Let&apos;s break it down:</p>

          <ul>
            <li>
              <span className="font-bold">function -</span> This keyword tells
              JavaScript that you are creating a function.
            </li>
            <li>
              <span className="font-bold">sayHello – </span>This is the name of
              the function. It should clearly describe what the function does.
            </li>
            <li>
              <span className="font-bold">(name) –</span> These are parameters.
              They act like variables that receive values when the function is
              called.
            </li>
            <li>
              <span className="font-bold">
                Function Body (everything inside of curly braces) –
              </span>{" "}
              This contains the code that runs when the function is called. In
              this case, it prints a greeting.
            </li>
          </ul>
        </Article>

        <Article title={"Calling a Function"}>
          <p>
            To use (or “call”) a function, you write its name followed by
            parentheses, passing in any required arguments:
          </p>

          <CodeDisplay
            code={`
sayHello("John"); // Hello John!
        `}
          />
        </Article>

        <Article title={"The return Keyword"}>
          <p>
            In JavaScript, the return keyword is used inside a function to send
            a value back to the place where the function was called. When a
            function returns something, it ends its execution and gives back a
            result.
          </p>

          <h3 className="mt-4">Why Do We Need return?</h3>
          <p>
            We use return when we want a function to produce a result that we
            can use later—for example, to store in a variable, display to the
            user, or use in another calculation.
          </p>

          <CodeDisplay
            code={`
function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 5); // result = 20
console.log(result); // 20
        `}
          />

          <p>
            Here, multiply(4, 5) returns 20, which is stored in the variable
            result.
          </p>

          <ProTip
            title={
              "If you don’t use the return keyword, the function will still run, but it won’t send back any value. In that case, the function automatically returns undefined."
            }
          />

          <CodeDisplay
            code={`
function greet(name) {
  console.log("Hello, " + name + "!");
}

const result = greet("Sam");
console.log(result); // undefined
        `}
          />

          <p>
            In this example, the function greet only prints a message. Since it
            doesn’t use return, the value stored in result is undefined.
          </p>
        </Article>

        <Article title={"Functions are Objects"}>
          <p>
            In JavaScript, functions are a special kind of object. You can see
            this by using console.dir(), which reveals the internal properties
            of the function:
          </p>

          <CodeDisplay
            code={`
function greet() {
  console.log("Hello!");
}

console.dir(greet);
        `}
          />

          <p>
            When you run this in the browser console, you’ll see that the
            function has properties like name and length, as well as a prototype
            object. You can even add your own custom properties to it. The
            function also inherits internal methods and behaviors from the
            built-in Function constructor, which is itself an object. This
            demonstrates that functions in JavaScript are not just reusable
            blocks of code, but also rich objects with their own structure and
            capabilities.
          </p>
        </Article>

        <Article title={"Callback functions"}>
          <p>
            A callback function is a function that is passed as an argument to
            another function and is called (or “invoked”) later, usually after
            some kind of operation is finished. This is a common pattern in
            JavaScript, especially when dealing with asynchronous tasks like
            loading data or waiting for user actions.
          </p>

          <CodeDisplay
            code={`
function someFunction(){
  console.log("Hello world!")
}

function anotherFunction(callbackFunction){
  callbackFunction();
}

anotherFunction(someFunction);
        `}
          />

          <p>
            In this example, someFunction is passed as a callback to
            anotherFunction.
          </p>
        </Article>

        <Article title={"JavaScript Built-in Callback Example: setTimeout"}>
          <p>
            JavaScript provides built-in functions like setTimeout that accept
            callbacks. setTimeout is used to delay the execution of a function
            by a specified amount of time (in milliseconds).
          </p>

          <CodeDisplay
            code={`
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);
        `}
          />

          <p>
            In this case, an anonymous function is passed as a callback to
            setTimeout, and it runs after 2 seconds.{" "}
          </p>

          <p>
            Callbacks let you pass one function into another, making it possible
            to run code after something else happens. This is especially useful
            in JavaScript, which often handles events and asynchronous tasks
            using callback functions.
          </p>
        </Article>

        <Article title={"Functions with Default Parameters"}>
          <p>
            In JavaScript, you can assign default values to function parameters.
            This means that if no value is provided for a parameter when the
            function is called, it will use the default instead.
          </p>

          <p>
            This feature helps prevent bugs and makes functions more flexible
            and easier to work with.
          </p>

          <CodeDisplay
            code={`
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));    //  5
console.log(multiply(5, 2)); //  10
        `}
          />

          <p>
            In this example, if you don’t pass an argument to b, it uses 1 as
            the default value for name.
          </p>

          <div className="my-6">
            <p>You can even use functions as default values:</p>
            <CodeDisplay
              code={`
function log(message = getDefaultMessage()) {
  console.log(message);
}

function getDefaultMessage() {
  return "No message provided.";
}
          `}
            />
          </div>

          <ProTip
            title={
              "Always put parameters with default values after required parameters or else you will get a Syntax error or unexpected behavior"
            }
          />

          <p>
            Default parameters make functions smarter by allowing you to define
            fallback values when arguments are missing. This results in cleaner,
            safer code and fewer conditional checks inside your function.
          </p>
        </Article>

        <Article title={"Immediately Invoked Function Expressions (IIFEs)"}>
          <p>
            An IIFE (Immediately Invoked Function Expression) is a function that
            runs as soon as it is defined. You don’t need to call it manually
            with its name — it executes itself right away.
          </p>

          <CodeDisplay
            code={`
(function() {
  console.log("This function runs immediately!");
})();
        `}
          />

          <p>
            Normally, to run a function, you define it and then call it later.
            With an IIFE, you wrap the function definition in parentheses to
            treat it as an expression, and then immediately invoke it with
            another set of parentheses ().
          </p>

          <p>
            It’s useful for creating private scopes and executing code without
            leaving traces in the global environment. While modern JavaScript
            offers other ways to create private scopes (like let, const, or
            modules), IIFEs are still a useful pattern to understand.
          </p>
        </Article>

        <p>
          Functions are the building blocks of JavaScript programs. They help us
          organize code, avoid repetition, and make our logic reusable and
          easier to understand. From simple tasks to complex operations,
          functions play a key role in writing clean, efficient, and flexible
          code. Understanding how to declare, call, return values, and use
          callbacks is essential for becoming a strong JavaScript developer.
        </p>
      </Chapter>
    </ProtectedRoute>
  );
}
