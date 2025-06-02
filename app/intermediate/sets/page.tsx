import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import ProtectedRoute from "@/components/ProtectedRoute";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function SetsPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title="sets" />

        <Article>
          <p>
            A Set is a built-in JavaScript object that lets you store unique
            values of any type—whether primitive values or object references. It
            was introduced in ES6 (ECMAScript 2015), Set is part of the modern
            JavaScript standard library.
          </p>

          <p>
            Sets store only unique data (no duplicates allowed). They keep
            insertion order and can hold any value type (string, number, object,
            etc.)
          </p>
        </Article>

        <Article title="Creating a Set">
          <CodeDisplay code={`const mySet = new Set();`} />

          <p>Or create a set with initial values:</p>

          <CodeDisplay
            code={`const numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers); // Set(4) { 1, 2, 3, 4 }`}
          />

          <p>Duplicate 3 is automatically removed.</p>
        </Article>

        <Article title="Common Set methods">
          <div>
            <h3 className="my-3">add(value)</h3>
            <p>Adds a new value to existing set</p>
            <CodeDisplay
              code={`const fruits = new Set();
fruits.add('apple');
fruits.add('banana');
fruits.add('apple'); 
console.log(fruits); // Set(2) { 'apple', 'banana' }`}
            />

            <p>If you try to add an existing value, it will be ignored</p>
          </div>

          <div className="mt-10">
            <h3 className="my-3">delete()</h3>
            <p>Removes a value from a set</p>
            <CodeDisplay
              code={`fruits.delete('banana');
console.log(fruits); // Set(1) { 'apple' }`}
            />
          </div>

          <div className="mt-10">
            <h3 className="my-3">has()</h3>
            <p>Returns true if value exists</p>
            <CodeDisplay
              code={`console.log(fruits.has('apple')); // true
console.log(fruits.has('banana')); // false`}
            />
          </div>

          <div className="mt-10">
            <h3 className="my-3">clear()</h3>
            <p>Removes all values from the Set</p>
            <CodeDisplay
              code={`fruits.clear();
console.log(fruits.size); // 0`}
            />
          </div>
        </Article>

        <Article title="Iterating Over a Set">
          <p>Sets are iterable, so you can use:</p>

          <div className="mt-10">
            <h3>for...of</h3>
            <CodeDisplay
              code={`const colors = new Set(['red', 'green', 'blue']);

for (const color of colors) {
  console.log(color);
}`}
            />
          </div>

          <div className="mt-10">
            <h3>forEach</h3>
            <CodeDisplay
              code={`colors.forEach(color => console.log(color));`}
            />
          </div>
        </Article>

        <Article>
          <p>
            In JavaScript, Sets offer a powerful way to store and manage unique
            values efficiently. Whether you’re removing duplicates from an
            array, checking for the existence of values. Sets provide a clean
            and intuitive approach. They are especially useful when working with
            collections where order matters but duplication doesn’t.
          </p>

          <p>
            By understanding how Sets work and when to use them, you can write
            more concise, readable, and optimized code—an essential skill for
            modern JavaScript development.
          </p>
        </Article>
      </Chapter>
    </ProtectedRoute>
  );
}
