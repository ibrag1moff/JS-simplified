import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import ProtectedRoute from "@/components/ProtectedRoute";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function EcmaScriptPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title="EcmaScript" />

        <Article>
          <p>
            Imagine JavaScript is a car. ECMAScript (often just called ES) is
            like the blueprint or standard that defines how all JavaScript
            engines (the things that run your code, like in Chrome or Node.js)
            should behave. It’s not something you write directly — it’s more
            like the rulebook that JavaScript follows. Every year or so, the
            folks at TC39 (a committee made of devs from companies like Google,
            Mozilla, Microsoft, etc.) update this rulebook to add new features,
            fix weird behaviors, or just make JavaScript more pleasant to work
            with.
          </p>
        </Article>

        <Article title="ES6: ECMAScript 2015">
          <p>
            ES6, officially called ECMAScript 2015, was a major update to the
            language and marked a turning point in JavaScript development. It
            introduced many new features to make JavaScript more powerful,
            readable, and easier to write, especially for large applications.
          </p>

          <h3>Key ES6 Features:</h3>
        </Article>

        <Article title="Let and Const">
          <ul>
            <li>let is block-scoped and a better alternative to var.</li>
            <li>
              const is also block-scoped but for constants (cannot be
              reassigned).
            </li>
          </ul>

          <CodeDisplay
            code={`let x = 10;
const y = 20;`}
          />
        </Article>

        <Article title="Arrow Functions">
          <p>
            A shorter syntax for writing functions and automatically binds this.
          </p>

          <CodeDisplay code={`const add = (a, b) => a + b;`} />
        </Article>

        <Article title="Template Literals">
          <p>Easier string interpolation using backticks `.</p>
          <CodeDisplay
            code={`\
const name = "John";
console.log(\`Hello, \${name}!\`);\``}
          />
        </Article>

        <Article title="Default Parameters">
          <p>Allows setting default values in function parameters.</p>
          <CodeDisplay
            code={`function greet(name = 'Guest') {
  console.log("Hello ", name);
}`}
          />
        </Article>

        <Article title="Destructuring">
          <p>Makes it easy to extract values from arrays or objects.</p>

          <CodeDisplay
            code={`const person = { name: 'Ali', age: 25 };
const { name, age } = person;`}
          />
        </Article>

        <Article title="Classes">
          <p>A cleaner way to write constructor functions and inheritance.</p>

          <CodeDisplay
            code={`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} makes a sound.\`);
  }
}`}
          />
        </Article>

        <Article title="Modules">
          <p>Enables importing and exporting code between files.</p>

          <CodeDisplay
            code={`// export
export const greet = () => console.log('Hello');

// import
import { greet } from './greet.js';`}
          />
        </Article>

        <Article title="Promises">
          <p>Used for asynchronous operations.</p>

          <CodeDisplay
            code={`const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data loaded'), 1000);
  });
};`}
          />
        </Article>

        <Article title="Map and Set">
          <p>
            New data structures for storing unique values and key-value pairs.
          </p>

          <CodeDisplay
            code={`const set = new Set([1, 2, 2, 3]); // {1, 2, 3}
const map = new Map();
map.set('key', 'value');`}
          />
        </Article>

        <Article>
          <p>
            ECMAScript is the foundation of JavaScript — it’s the standard that
            keeps the language consistent and evolving. When ES6 (ECMAScript
            2015) was released, it didn’t just bring a few tweaks — it
            revolutionized how we write JavaScript. From let/const and arrow
            functions to promises, classes, and modules, ES6 made JavaScript
            cleaner, more readable, and way more powerful.
          </p>

          <p>
            If you’re serious about writing modern JavaScript — whether for
            frontend apps, Node.js backends, or anything in between — learning
            and using ES6 features isn’t optional anymore. It’s the new normal.
          </p>
        </Article>
      </Chapter>
    </ProtectedRoute>
  );
}
