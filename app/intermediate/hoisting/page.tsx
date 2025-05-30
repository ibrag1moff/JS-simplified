import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import PaidRoute from "@/components/PaidRoute";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function HoistingPage() {
  return (
    <PaidRoute>
      <Chapter>
        <SectionTitle title={"Hoisting"} />

        <p>
          If you’ve ever been surprised that a variable or function seems to
          exist before it was declared—or confused by undefined appearing when
          you expected a value—then you’ve encountered hoisting, another core
          concept in JavaScript.
        </p>

        <Article title="What is Hoisting?">
          <p>
            Hoisting is JavaScript’s default behavior of moving declarations
            (not initializations) to the top of their scope (either function or
            global scope) during the compile phase, before the code is executed.
          </p>

          <p>
            This means that variables declared with var and function
            declarations are “hoisted” to the top of their scope and can be
            accessed before their actual line in the code.
          </p>
        </Article>

        <Article title="Hoisting with var">
          <p>
            Variables declared with var are hoisted, but only the declaration,
            not the assignment.
          </p>

          <CodeDisplay
            code={`console.log(x); // undefined
var x = 5;
console.log(x); // 5`}
          />

          <p>Behind the scenes, JavaScript treats the code like this:</p>

          <CodeDisplay
            code={`var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5`}
          />

          <p>
            This explains why undefined is printed instead of causing a
            ReferenceError.
          </p>
        </Article>

        <Article title="Hoisting with let and const">
          <p>
            Unlike var, variables declared with let and const are also hoisted,
            but they are not initialized. They remain in a “temporal dead zone”
            (TDZ) from the start of the block until the declaration is
            encountered. Accessing them before the declaration results in a
            ReferenceError.
          </p>

          <CodeDisplay
            code={`console.log(y); // ReferenceError
let y = 10;`}
          />

          <CodeDisplay
            code={`console.log(z); // ReferenceError
const z = 20;`}
          />

          <p>
            This is why let and const are considered safer and more predictable
            than var.
          </p>
        </Article>

        <Article title="Function Declarations Are Hoisted">
          <p>
            Function declarations are fully hoisted—including both their name
            and body. You can call the function before it appears in your code.
          </p>

          <CodeDisplay
            code={`greet(); // Hello!

function greet() {
  console.log("Hello!");
}`}
          />
        </Article>

        <Article title="Function Expressions Are Not Hoisted Like Declarations">
          <p>
            If a function is assigned to a variable (function expression), then
            only the variable is hoisted, not the function definition. This
            leads to a TypeError if you try to call the function before the line
            it’s defined on.
          </p>

          <CodeDisplay
            code={`sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};`}
          />
        </Article>

        <Article title="Why Hoisting Matters">
          <p>
            Understanding hoisting helps avoid bugs and confusion, especially in
            larger codebases. It explains why certain variables are undefined,
            and why function declarations sometimes work before they are
            defined.
          </p>

          <p>
            By declaring all variables and functions at the top of their scope
            (or at least before using them), you write clearer and more
            predictable JavaScript code.
          </p>
        </Article>
      </Chapter>
    </PaidRoute>
  );
}
