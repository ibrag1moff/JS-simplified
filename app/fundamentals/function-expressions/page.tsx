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
          So far, we’ve seen functions declared using the{" "}
          <span>function keyword</span> in a traditional way (called function
          declarations). But in JavaScript, there are other ways to define
          functions — one of the <span>most common</span> is using a{" "}
          <span>function expression.</span>
        </p>

        <p>
          A function expression is when you <span>create</span> a function and
          <span> assign</span> it to a variable. It can be named or anonymous,
          and it doesn’t get <span>hoisted</span> like function declarations do
          which means that you can&apos;t call it before defining it.
        </p>

        <CodeDisplay
          code={`
const greet = function(name) {
  console.log("Hello, " + name + "!");
};
        `}
        />

        <p>
          This function is <span>stored</span> in the variable greet and can be
          <span> used</span> just like a regular function.
        </p>

        <div className="my-6">
          <p>
            You can also create <span>anonymous functions</span> (without a
            name), which are commonly used as callbacks:
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
            Function expressions <span>can also be named,</span> though the name
            is mostly used for <span>debugging</span> or <span>recursion:</span>
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
          Arrow functions are a <span>more concise way</span> to write function
          expressions. They are always <span>anonymous,</span> and they behave
          differently from <span>regular functions</span> in some important
          ways.
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
          <p>
            If there’s only one parameter, you can <span>skip</span> the
            parentheses:
          </p>
          <CodeDisplay
            code={`
const square = x => x * x;
        `}
          />
        </div>

        <div>
          <p>
            If there are no parameters, you <span>must</span> use empty
            parentheses:
          </p>
          <CodeDisplay
            code={`
const greet = () => console.log("Hi!");
        `}
          />
        </div>
      </Article>

      <Article title={"Implicit Return in Arrow Functions"}>
        <p>
          One of the <span>convenient features</span> of arrow functions is that
          if the function body contains only a <span>single expression,</span>{" "}
          you can omit both the <span>curly braces</span> and the{" "}
          <span>return keyword.</span> This is called an{" "}
          <span>implicit return.</span>
        </p>

        <CodeDisplay
          code={`
const square = x => x * x;
        `}
        />

        <p>
          Here JavaScript <span>automatically returns</span> the result of the
          expression x * x — no need to write <span>return</span> manually. This
          only works when the <span>function body</span> has one line and is not
          enclosed in curly braces. If you use curly braces, you{" "}
          <span>must</span>
          write return <span>explicitly.</span>
        </p>

        <p>
          Implicit return <span>makes</span> your code cleaner and shorter,
          especially for <span> simple</span> operations like math calculations,
          formatting strings, or returning objects (though with objects,
          parentheses are needed).
        </p>
      </Article>
    </Chapter>
  );
}
