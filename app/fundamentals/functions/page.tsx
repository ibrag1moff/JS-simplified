import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";
import ProTip from "@/widgets/Protip";

export default function FunctionsPage() {
  return (
    <Chapter>
      <SectionTitle title={"Functions"} />

      <Article>
        <p>
          In JavaScript, <span>functions</span> are one of the most{" "}
          <span>important</span> building blocks of the language. A function is
          a <span>reusable block of code</span> that performs a specific task.
          Instead of repeating the same lines of code over and over, you can
          define a <span>function</span> once and call it whenever you need it.
          This makes your <span>code</span> cleaner, more organized, and easier
          to maintain.
        </p>

        <p>
          In this chapter, you’ll learn how to <span>define</span> functions,
          call them, pass data to them, return results in JavaScript
        </p>
      </Article>

      <Article title={"Declaring and Calling a Function"}>
        <p>
          In JavaScript, a function is defined using the <span>function</span>{" "}
          keyword, followed by the <span>name</span> of the function, a list of
          <span> parameters</span> inside parentheses, and the{" "}
          <span>function body </span>
          inside curly braces.
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
            <span className="font-bold">function</span> – This keyword tells
            JavaScript that you are creating a function.
          </li>
          <li>
            <span className="font-bold">sayHello</span> – This is the name of
            the function. It should clearly describe what the function does.
          </li>
          <li>
            <span className="font-bold">(name)</span> – These are parameters.
            They act like variables that receive values when the function is
            called.
          </li>
          <li>
            <span className="font-bold">Function Body</span> (everything inside
            of curly braces) – This contains the code that runs when the
            function is called. In this case, it prints a greeting.
          </li>
        </ul>
      </Article>

      <Article title={"Calling a Function"}>
        <p>
          To use (or “call”) a function, you write its <span>name</span>{" "}
          followed by parentheses, passing in any required{" "}
          <span>arguments:</span>
        </p>

        <CodeDisplay
          code={`
sayHello("John"); // Hello John!
        `}
        />
      </Article>

      <Article title={"The return Keyword"}>
        <p>
          In JavaScript, the <span>return</span> keyword is used inside a
          function to <span>send</span> a value back to the place where the
          function was called. When a function returns something, it{" "}
          <span>ends</span> its execution and gives back a result.
        </p>

        <h3 className="mt-4">Why Do We Need return?</h3>
        <p>
          We use <span>return</span> when we want a function to{" "}
          <span>produce</span> a result that we can use later—for example, to
          <span> store</span> in a variable, display to the user, or use in
          another calculation.
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
          Here, multiply(4, 5) <span>returns 20,</span> which is stored in the
          variable
          <span> result.</span>
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
          In this example, the function greet <span>only prints</span> a
          message. Since it doesn’t use <span>return,</span> the value stored in
          result is <span>undefined.</span>
        </p>
      </Article>

      <Article title={"Functions are Objects"}>
        <p>
          In JavaScript, functions are a <span>special</span> kind of object.
          You can see this by using <span>console.dir(),</span> which reveals
          the internal properties of the function:
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
          When you run this in the <span>browser console,</span> you’ll see that
          the function has properties like <span>name</span> and{" "}
          <span>length,</span> as well as a prototype object. You can even add
          your own custom properties to it. The function also{" "}
          <span>inherits</span> internal methods and behaviors from the built-in
          Function constructor, which is <span>itself an object.</span> This
          demonstrates that functions in JavaScript are not just reusable blocks
          of code, but also <span>rich objects</span> with their own structure
          and capabilities.
        </p>
      </Article>

      <Article title={"Callback functions"}>
        <p>
          A <span>callback function</span> is a function that is passed as an
          argument to another function and is called (or “invoked”) later,
          usually after some kind of operation is finished. This is a{" "}
          <span>common pattern</span> in JavaScript, especially when dealing
          with <span>asynchronous tasks</span> like loading data or waiting for
          user actions.
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
          In this example, <span>someFunction</span> is passed as a{" "}
          <span>callback</span> to <span>anotherFunction.</span>
        </p>
      </Article>

      <Article title={"JavaScript Built-in Callback Example: setTimeout"}>
        <p>
          JavaScript provides <span>built-in</span> functions like{" "}
          <span>setTimeout </span>
          that accept callbacks. setTimeout is used to{" "}
          <span>delay the execution</span> of a function by a specified amount
          of time (in milliseconds).
        </p>

        <CodeDisplay
          code={`
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);
        `}
        />

        <p>
          In this case, an <span>anonymous function</span> is passed as a
          callback to <span>setTimeout,</span> and it runs after 2 seconds.{" "}
        </p>

        <p>
          Callbacks let you pass one function into another, making it possible
          to run code after something else happens. This is especially useful in
          JavaScript, which often handles events and asynchronous tasks using
          callback functions.
        </p>
      </Article>

      <Article title={"Functions with Default Parameters"}>
        <p>
          In JavaScript, you can <span>assign</span> default values to function
          parameters. This means that if <span>no value is provided</span> for a
          parameter when the function is called, it will <span>use</span> the
          default instead.
        </p>

        <p>
          This feature <span>helps</span> prevent bugs and <span>makes</span>{" "}
          functions more flexible and easier to work with.
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
          In this example, if you <span>don’t pass</span> an argument to b, it
          uses 1 as the <span>default value</span> for name.
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
          An IIFE (Immediately Invoked Function Expression) is a{" "}
          <span>function</span> that runs <span>as soon as</span> it is defined.
          You don’t need to <span>call</span> it manually with its name — it
          <span> executes</span> itself right away.
        </p>

        <CodeDisplay
          code={`
(function() {
  console.log("This function runs immediately!");
})();
        `}
        />

        <p>
          Normally, to <span>run</span> a function, you <span>define</span> it
          and then call it later. With an IIFE, you <span>wrap</span> the
          function definition in parentheses to <span>treat</span> it as an
          expression, and then <span>immediately invoke</span> it with another
          set of parentheses ().
        </p>

        <p>
          It’s useful for creating private scopes and executing code without
          leaving traces in the global environment. While modern JavaScript
          offers other ways to create private scopes (like let, const, or
          modules), IIFEs are still a useful pattern to understand.
        </p>
      </Article>

      <p>
        Functions are the <span>building blocks</span> of JavaScript programs.
        They <span>help</span> us organize code, avoid repetition, and make our
        logic reusable and easier to understand. From simple tasks to complex
        operations, functions play a <span>key role</span> in writing clean,
        efficient, and flexible code. Understanding how to declare, call, return
        values, and use <span>callbacks</span> is essential for becoming a
        strong JavaScript developer.
      </p>
    </Chapter>
  );
}
