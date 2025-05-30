import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";

export default function ScopePage() {
  return (
    <Chapter>
      <SectionTitle title={"Scope"} />

      <Article>
        <p>
          If you’ve ever wondered why some variables are accessible in certain
          parts of your JavaScript code but not in others—or why undefined
          sometimes appears in unexpected places—then you’re about to uncover
          two of JavaScript’s most fundamental concepts: scope and hoisting.
        </p>
      </Article>

      <Article title={"What is Scope?"}>
        <p>
          Scope refers to the accessibility or visibility of variables in
          different parts of your code. In simple terms, it answers the
          question: Where can I use this variable? JavaScript has three types of
          scope.
        </p>

        <ul>
          <li className={"font-bold"}>Global Scope</li>
          <li className={"font-bold"}>Local Scope</li>
          <li className={"font-bold"}>Function Scope</li>
        </ul>
      </Article>

      <Article title={"Global scope"}>
        <p>
          A variable declared outside of any function or block is in the global
          scope. It can be accessed from anywhere in your code including
          functions or blocks.
        </p>

        <CodeDisplay
          code={`
let name = "Rufat";

function greet() {
  console.log("Hello, " + name); // Hello Rufat
}

greet();
console.log(name); // Rufat
        `}
        />
      </Article>

      <Article title={"Function scope"}>
        <p>
          Variables declared inside a function are in the function scope. They
          are only accessible within that function.
        </p>

        <CodeDisplay
          code={`
function showAge() {
  let age = 25;
  console.log(age); // 25
}

showAge();

console.log(age); // ReferenceError: age is not defined
        `}
        />

        <p>Here, age is only accessible inside showAge().</p>
      </Article>

      <Article title={"Block scope"}>
        <p>
          A block is any code wrapped in curly braces — like if statements,
          loops, or just standalone blocks. Variables declared with let or const
          inside a block are scoped to that block.
        </p>

        <CodeDisplay
          code={`
{
  let message = "Hello";
  console.log(message); // Hello
}

console.log(message); // ReferenceError
        `}
        />

        <p>
          However, if you use var instead of let, the behavior is different. var
          is not block-scoped — it’s function-scoped.
        </p>

        <CodeDisplay
          code={`
{
  var color = "blue";
}

console.log(color); // blue
        `}
        />

        <p>This is one reason why let and const are preferred over var.</p>
      </Article>

      <Article title={"Scope Chain"}>
        <p>
          If a variable is not found in the current scope, JavaScript looks up
          to the outer scope. This chain continues until it reaches the global
          scope.
        </p>

        <p>
          This behavior is known as the scope chain. In JavaScript, every
          function creates a new scope. When a variable is accessed, the
          JavaScript engine starts by looking in the local scope (inside the
          current function). If the variable isn’t found there, it continues to
          search outward through the enclosing (parent) scopes, one level at a
          time, until it either finds the variable or reaches the global scope.
        </p>

        <p>
          The scope chain is essentially a list of variable environments that
          the engine follows in a specific order: from innermost (local) to{" "}
          outermost (global). This allows functions to access variables declared
          in outer scopes, but not vice versa.
        </p>

        <CodeDisplay
          code={`
let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am in outerFunction";

  function innerFunction() {
    let innerVar = "I am in innerFunction";
    console.log(globalVar);  // I am global
    console.log(outerVar);   // I am in outerFunction
    console.log(innerVar);   // I am in innerFunction
  }

  innerFunction();
}

outerFunction();
        `}
        />

        <p>
          In this example, innerFunction can access innerVar (local), outerVar
          (from outerFunction), and globalVar (global).
        </p>

        <p>
          However, outerFunction cannot access innerVar, and the global scope
          cannot access either outerVar or innerVar.
        </p>
      </Article>

      <p>
        Understanding the scope chain is crucial for debugging and avoiding
        variable name conflicts. It also plays a key role in closures, where
        inner functions remember variables from their outer scopes even after
        the outer function has finished executing.
      </p>
    </Chapter>
  );
}
