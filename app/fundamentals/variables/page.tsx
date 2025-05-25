import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function VariablesPage() {
  return (
    <Chapter>
      <SectionTitle title="Variables" />
      <p>
        In every programming language, <span>variables</span> are essential.
        They’re like labeled boxes where you can <span>store</span> and{" "}
        <span>manage</span> data. In JavaScript, variables help us keep track of
        information like names, scores, settings, or any kind of value that
        might change as the program runs. code.
      </p>

      <Article title="What are Variables?">
        <p>
          A variable is like a <span>container</span> that holds data. You can
          store different kinds of values in these containers, and you can
          change the data inside them as needed.
        </p>
      </Article>

      <Article>
        <p>
          To declare a <span>variable</span> in JavaScript, you use keywords
          like let, const, or var.
        </p>

        <CodeDisplay
          code={`
let name = "Alice"; 
const age = 30;     
var city = "Baku";  
            `}
        />
      </Article>

      <Article title="let – Flexible and Modern">
        <p>
          Use <span>let</span> when you expect the value <span>to change</span>{" "}
          later.
        </p>
        <CodeDisplay
          code={`
let age = 18;
age = 25

console.log(age); // 25

`}
        />
      </Article>

      <Article title="const – Constants That Don’t Change">
        <p>
          Use <span>const</span> for values that should <span>stay</span> the
          same.
        </p>
        <CodeDisplay
          code={`
const name = "Alice";
console.log(name); // "Alice"
`}
        />

        <p>
          If you try to change a <span>const</span> variable, JavaScript will
          give you an <span>error.</span>
        </p>

        <CodeDisplay
          code={`
const age = 18;
age = 25;
console.log(age); // Error: Assignment to constant variable.
  `}
        />
      </Article>

      <Article title="var – The Old Way">
        <p>
          var is still valid but has <span>confusing behavior</span> because of
          hoisting and function scope. We’ll <span>explore</span> this later,
          but for now, prefer <span>let</span> or <span>const.</span>
        </p>

        <p>
          Declaring variables with <span>var keyword</span> is avoided in modern
          JavaScript.
        </p>
      </Article>

      <Article title="Naming Conventions for Variables">
        <p>
          In Javascript you <span>can name</span> your variables whatever you
          like, but it is more <span>professional</span> to stick with so called{" "}
          <span>Naming conventions.</span>
        </p>

        <p>
          Naming variables is not just about following rules — it’s also about
          writing code that’s <span>clear,</span> <span>consistent,</span> and{" "}
          <span>easy to read.</span> Different programming communities use
          different naming conventions to keep things <span>organized.</span>{" "}
          Here are the <span>three</span> most common styles you’ll encounter in
          JavaScript:
        </p>
      </Article>

      <Article title="1. camelCase">
        <p>
          The fist word in <span>camelCase</span> should be all{" "}
          <span>lowercase.</span> Each following word starts with a{" "}
          <span>capital letter.</span> Do not use spaces or underscores.
        </p>

        <CodeDisplay
          code={`
let userName;
let totalPrice;
let isLoggedIn;
          `}
        />

        <p>
          camelCase is <span>the most popular convention</span> for variables
          and function names in JavaScript. For example, built-in JavaScript
          methods like getElementById use camelCase.
        </p>
      </Article>

      <Article title="2. PascalCase">
        <p>
          Similar to <span>camelCase,</span> but the first letter is also{" "}
          <span>capitalized.</span> Do not use spaces or underscores.
        </p>

        <CodeDisplay
          code={`
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
          `}
        />

        <p>
          PascalCase is usually reserved for naming classes, constructors, or
          <span> React components.</span>
        </p>
      </Article>

      <Article title="3. SNAKE_CASE">
        <p>
          All letters in <span>SNAKE_CASE</span> are <span>uppercase.</span>{" "}
          Words are separated by <span>underscores.</span>
        </p>

        <CodeDisplay
          code={`
const API_KEY = "123456";
const MAX_VALUE = 100;
          `}
        />

        <p>
          SNAKE_CASE is commonly used for <span>constants</span> — values that
          should not change during the program execution.
        </p>
      </Article>

      <p>
        Variables let you store and manage data in your programs. Using let and
        const helps keep your code clear and reliable. Remember to pick
        meaningful names and follow naming conventions. With variables, you can
        make your code dynamic and powerful.
      </p>
    </Chapter>
  );
}
