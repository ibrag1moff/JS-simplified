import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";

export default function FunctionExpressionsPage() {
  return (
    <Chapter>
      <SectionTitle title={"Function Expressions & Arrow Functions"} />

      <Article title={"Function Expressions"}>
        <p>
          So far, we’ve seen functions declared using the function keyword in a
          traditional way (called function declarations). But in JavaScript,
          there are other ways to define functions — one of the most common is
          using a function expression.
        </p>

        <p>
          A function expression is when you create a function and assign it to a
          variable. It can be named or anonymous, and it doesn’t get hoisted
          like function declarations do which means that you can&apos;t call it
          before defining it.
        </p>

        <CodeDisplay
          code={`
const greet = function(name) {
  console.log("Hello, " + name + "!");
};
        `}
        />

        <p>
          This function is stored in the variable greet and can be used just
          like a regular function.
        </p>

        <div className="my-6">
          <p>
            You can also create anonymous functions (without a name), which are
            commonly used as callbacks:
          </p>
          <CodeDisplay
            code={`
setTimeout(function() {
  console.log("Time's up!");
}, 1000);
        `}
          />
        </div>

        <div>
          <p>
            Function expressions can also be named, though the name is mostly
            used for debugging or recursion:
          </p>

          <CodeDisplay
            code={`
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
          `}
          />
        </div>
      </Article>

      <Article title={"Arrow Functions (ES6+)"}>
        <p>
          Arrow functions are a more concise way to write function expressions.
          They are always anonymous, and they behave differently from regular
          functions in some important ways.
        </p>

        <CodeDisplay
          code={`
const sum = (a, b) => {
  return a + b;
};

sum(5, 10)
        `}
        />

        <div className="my-6">
          {" "}
          <p>If there’s only one parameter, you can skip the parentheses:</p>
          <CodeDisplay
            code={`
const square = x => x * x;
        `}
          />
        </div>

        <div>
          <p>If there are no parameters, you must use empty parentheses:</p>
          <CodeDisplay
            code={`
const greet = () => console.log("Hi!");
        `}
          />
        </div>
      </Article>

      <Article title={"Implicit Return in Arrow Functions"}>
        <p>
          One of the convenient features of arrow functions is that if the
          function body contains only a single expression, you can omit both the
          curly braces and the return keyword. This is called an implicit
          return.
        </p>

        <CodeDisplay
          code={`
const square = x => x * x;
        `}
        />

        <p>
          Here JavaScript automatically returns the result of the expression x *
          x — no need to write return manually. This only works when the
          function body has one line and is not enclosed in curly braces. If you
          use curly braces, you must write return explicitly.
        </p>

        <p>
          Implicit return makes your code cleaner and shorter, especially for
          simple operations like math calculations, formatting strings, or
          returning objects (though with objects, parentheses are needed).
        </p>
      </Article>
    </Chapter>
  );
}
