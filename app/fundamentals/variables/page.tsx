import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function VariablesPage() {
  return (
    <Chapter>
      <SectionTitle title="Variables" />
      <p>
        In every programming language, variables are essential. They’re like
        labeled boxes where you can store and manage data. In JavaScript,
        variables help us keep track of information like names, scores,
        settings, or any kind of value that might change as the program runs.
        code.
      </p>

      <Article title="What are Variables?">
        <p>
          A variable is like a container that holds data. You can store
          different kinds of values in these containers, and you can change the
          data inside them as needed.
        </p>
      </Article>

      <Article>
        <p>
          To declare a variable in JavaScript, you use keywords like let, const,
          or var.
        </p>

        <CodeDisplay
          code={`let name = "Alice"; 
const age = 30;     
var city = "Baku";`}
        />
      </Article>

      <Article title="let – Flexible and Modern">
        <p>Use let when you expect the value to change later.</p>
        <CodeDisplay
          code={`let age = 18;
age = 25

console.log(age); // 25`}
        />
      </Article>

      <Article title="const – Constants That Don’t Change">
        <p>Use const for values that should stay the same.</p>
        <CodeDisplay
          code={`const name = "Alice";
console.log(name); // "Alice"`}
        />

        <p>
          If you try to change a const variable, JavaScript will give you an
          error.
        </p>

        <CodeDisplay
          code={`const age = 18;
age = 25;
console.log(age); // Error: Assignment to constant variable.`}
        />
      </Article>

      <Article title="var – The Old Way">
        <p>
          var is still valid but has confusing behavior because of hoisting and
          function scope. We’ll explore this later, but for now, prefer let or
          const.
        </p>

        <p>
          Declaring variables with var keyword is avoided in modern JavaScript.
        </p>
      </Article>

      <Article title="Naming Conventions for Variables">
        <p>
          In Javascript you can name your variables whatever you like, but it is
          more professional to stick with so called Naming conventions.
        </p>

        <p>
          Naming variables is not just about following rules — it’s also about
          writing code that’s clear, consistent, and easy to read. Different
          programming communities use different naming conventions to keep
          things organized. Here are the three most common styles you’ll
          encounter in JavaScript:
        </p>
      </Article>

      <Article title="1. camelCase">
        <p>
          The fist word in camelCase should be all lowercase. Each following
          word starts with a capital letter. Do not use spaces or underscores.
        </p>

        <CodeDisplay
          code={`let userName;
let totalPrice;
let isLoggedIn;`}
        />

        <p>
          camelCase is the most popular convention for variables and function
          names in JavaScript. For example, built-in JavaScript methods like
          getElementById use camelCase.
        </p>
      </Article>

      <Article title="2. PascalCase">
        <p>
          Similar to camelCase, but the first letter is also capitalized. Do not
          use spaces or underscores.
        </p>

        <CodeDisplay
          code={`class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}`}
        />

        <p>
          PascalCase is usually reserved for naming classes, constructors, or
          React components.
        </p>
      </Article>

      <Article title="3. SNAKE_CASE">
        <p>
          All letters in SNAKE_CASE are uppercase. Words are separated by
          underscores.
        </p>

        <CodeDisplay
          code={`const API_KEY = "123456";
const MAX_VALUE = 100;`}
        />

        <p>
          SNAKE_CASE is commonly used for constants — values that should not
          change during the program execution.
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
