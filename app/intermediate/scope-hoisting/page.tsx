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
          <span>function</span>
          scope. They are only accessible <span>within</span> that function.
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
      </Article>
    </Chapter>
  );
}
