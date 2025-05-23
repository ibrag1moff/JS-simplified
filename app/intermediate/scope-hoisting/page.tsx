import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";

export default function ScopeAndHoistingPage() {
  return (
    <Chapter>
      <SectionTitle title={"Scope"} />

      <Article>
        <p>
          If you’ve ever wondered <span>why</span> some variables are{" "}
          <span>accessible </span>
          in certain parts of your JavaScript <span>code</span> but not in
          others—or why <span>undefined</span> sometimes appears in unexpected
          places—then you’re about to uncover two of JavaScript’s most
          fundamental concepts: scope and hoisting.
        </p>
      </Article>

      <Article title={"What is Scope?"}>
        <p>
          Scope refers to the <span>accessibility</span> or{" "}
          <span>visibility</span> of variables in different parts of your code.
          In simple terms, it answers the question: Where can I use this
          variable? JavaScript has <span>three</span> types of scope.
        </p>

        <ul>
          <li className={"font-bold"}>Global Scope</li>
          <li className={"font-bold"}>Local Scope</li>
          <li className={"font-bold"}>Function Scope</li>
        </ul>
      </Article>

      <Article title={"Global scope"}>
        <p>
          A variable declared <span>outside</span> of any function or block is
          in the <span>global</span> scope. It can be <span>accessed</span> from
          <span> anywhere</span> in your code <span>including</span> functions
          or blocks.
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
          Variables declared <span>inside</span> a function are in the{" "}
          <span>function </span> scope. They are only accessible{" "}
          <span>within</span> that function.
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

        <p>
          Here, age is <span>only accessible</span> inside showAge().
        </p>
      </Article>

      <Article title={"Block scope"}>
        <p>
          A block is any code wrapped in <span>curly braces</span> — like if
          statements, loops, or just standalone blocks. Variables declared with
          let or const inside a block are <span>scoped</span> to that block.
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
          However, if you use <span>var</span> instead of <span>let,</span> the
          behavior is <span>different.</span> var is not block-scoped — it’s
          <span> function-scoped.</span>
        </p>

        <CodeDisplay
          code={`
{
  var color = "blue";
}

console.log(color); // blue
        `}
        />

        <p>
          This is one reason why <span>let</span> and <span>const</span> are
          preferred over <span>var.</span>
        </p>
      </Article>

      <Article title={"Scope Chain"}>
        <p>
          If a variable is not found in the <span>current scope,</span>{" "}
          JavaScript looks up to the <span>outer</span> scope. This chain
          continues until it <span>reaches</span> the <span>global scope.</span>
        </p>

        <p>
          This behavior is known as the <span>scope chain.</span> In JavaScript,
          every function <span>creates</span> a new scope. When a variable is
          accessed, the <span>JavaScript engine</span> starts by looking in the
          local scope (inside the current function). If the variable isn’t found
          there, it continues to search <span>outward</span> through the
          enclosing (parent) scopes, one level at a time, until it either finds
          the variable or reaches the <span>global scope.</span>
        </p>

        <p>
          The scope chain is essentially{" "}
          <span>a list of variable environments</span> that the engine follows
          in a specific order: from <span>innermost (local)</span> to{" "}
          <span>outermost (global).</span> This allows functions to{" "}
          <span>access</span> variables declared in outer scopes, but not vice
          versa.
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
          In this example, <span>innerFunction</span> can access{" "}
          <span>innerVar</span> (local), <span>outerVar</span> (from
          outerFunction), and <span>globalVar</span> (global).
        </p>

        <p>
          However, <span>outerFunction</span> cannot access{" "}
          <span>innerVar,</span> and the global scope cannot access either{" "}
          <span>outerVar</span> or <span>innerVar.</span>
        </p>
      </Article>

      <p>
        Understanding the <span>scope chain</span> is crucial for debugging and
        avoiding variable name conflicts. It also plays a key role in{" "}
        <span>closures,</span> where inner functions <span>remember</span>{" "}
        variables from their outer scopes even after the outer function has
        finished executing.
      </p>
    </Chapter>
  );
}
