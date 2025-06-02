import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import ProtectedRoute from "@/components/ProtectedRoute";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function DestructuringPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title="destructuring" />

        <Article title="Array Destructuring">
          <p>
            You can extract values from an array and assign them to variables:
          </p>

          <CodeDisplay
            code={`const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;

console.log(first); // 'red'
console.log(second); // 'green'
console.log(third); // 'blue'`}
          />

          <p>Skipping Elements</p>

          <CodeDisplay
            code={`const [first, , third] = colors;
console.log(first); // 'red'
console.log(third); // 'blue'`}
          />
        </Article>

        <Article title="Object Destructuring">
          <p>You can extract properties from an object:</p>

          <CodeDisplay
            code={`const user = {
  name: 'Alice',
  age: 25,
  country: 'USA'
};

const { name, age } = user;
console.log(name); // 'Alice'
console.log(age);  // 25`}
          />

          <p>Renaming Variables</p>

          <CodeDisplay
            code={`const { name: userName } = user;
console.log(userName); // 'Alice'`}
          />
        </Article>

        <Article title="Nested Destructuring">
          <p>You can destructure deeply nested objects and arrays:</p>

          <CodeDisplay
            code={`const person = {
  name: 'Bob',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const {
  address: { city }
} = person;

console.log(city); // 'New York'`}
          />
        </Article>

        <Article title="Function Parameter Destructuring">
          <p>You can destructure directly in function parameters:</p>

          <CodeDisplay
            code={`function greet({ name, age }) {
  console.log(\`Hello \${name}, you are \${age} years old.\`);
}

greet({ name: 'Charlie', age: 30 });`}
          />
        </Article>

        <Article title="Destructuring with Rest Operator">
          <p>You can gather the remaining items using the rest operator:</p>

          <CodeDisplay
            code={`const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }`}
          />
        </Article>

        <Article>
          <p>
            Destructuring is a powerful tool in modern JavaScript that
            simplifies working with arrays and objects. It improves readability
            and makes your code cleaner and more declarative. It’s widely used
            in frameworks like React and in data handling operations.
          </p>
        </Article>
      </Chapter>
    </ProtectedRoute>
  );
}
