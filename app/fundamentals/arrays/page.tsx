import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";

export default function ArraysPage() {
  return (
    <Chapter>
      <SectionTitle title={"Arrays and Array Methods"} />

      <Article>
        <p>
          In JavaScript, <span>arrays</span> are one of the most commonly used
          data structures. They <span>allow</span> you to store multiple values
          in a single variable, making it easier to organize and work with
          related data. Whether you’re <span>building</span> a to-do list,
          managing user data, or working with collections of items, arrays
          provide the foundation for <span>handling</span> sets of information
          efficiently.
        </p>

        <p>
          This chapter will guide you through the fundamentals of arrays—how to
          create them, access elements, and perform operations like adding,
          removing, or ariable, making it easier to organize and work with
          related data. Whether you’re <span>building</span> a to-do list,
          managing user data, or workinp() to map(), filter(), and reduce(),
          these methods simplify many common programming tasks.
        </p>

        <p>
          By the end of this chapter, you’ll have a solid understanding of
          arrays and how to use them effectively in your JavaScript programs.
        </p>
      </Article>

      <Article title={"What is an Array?"}>
        <p>
          An array is a special <span>variable</span> that can hold{" "}
          <span>multiple values</span> in a single variable. Instead of creating
          <span>separate</span> variables for each item, you can{" "}
          <span>group</span> them together.
        </p>

        <p>
          Arrays can <span>store</span> any type of data — numbers, strings,
          booleans, objects, or even <span>other</span> arrays.
        </p>

        <CodeDisplay
          code={`
const numbers = [1, 2, 3, 4, 5]

const fruits = ['banana', 'apple', 'orange']

const mixed = ['hello', 123, true]
        `}
        />
      </Article>

      <Article title={"Accessing Elements"}>
        <p>
          You can <span>access</span> elements by their index (starts at 0).
        </p>

        <CodeDisplay
          code={`
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
        `}
        />
      </Article>

      <Article title={"Arrays are objects"}>
        <p>
          In JavaScript, arrays are a <span>special</span> kind of object
          designed for <span>storing</span> ordered values, and they{" "}
          <span>inherit</span> many features from objects, including the ability
          to <span>access</span> properties using <span>dot notation.</span> For
          instance, the <span>.length</span> property of an array tells you how
          many elements it contains. This <span>works</span> because arrays,
          being objects, can have both methods (like .push(), .pop()) and
          properties (like .length). You can <span>access</span> these just like
          with regular objects — using dot notation.
        </p>

        <CodeDisplay
          code={`
const fruits = ["apple", "banana", "orange"];
        `}
        />

        <p>
          When you <span>run</span> this in the browser console, you’ll see that
          an <span>array</span> has properties like length and methods such as
          push, as well as a <span>prototype</span> object. You can even add
          your own custom properties to an array. Arrays also{" "}
          <span>inherit</span> internal methods and behaviors from the built-in
          <span> Array constructor,</span> which is itself an object. This{" "}
          <span>shows </span>
          that arrays in JavaScript are not just simple lists of values, but
          also full-featured objects with their own structure, properties, and
          capabilities.
        </p>
      </Article>

      <Article title={"Arrays as Reference Types in JavaScript"}>
        <p>
          In JavaScript, arrays are <span>reference types,</span> which means
          they are not compared or copied by their actual contents, but by their
          reference in memory. When you <span>create</span> an array, the
          variable <span>doesn’t store</span> the actual array data — it{" "}
          <span>stores</span>a reference (a pointer) to where the array lives in
          memory.
        </p>

        <CodeDisplay
          code={`
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

console.log(arr1 === arr2) // false
        `}
        />

        <p>
          Even though arr1 and arr2 <span>look</span> identical, they are two
          different <span>arrays</span> stored in different memory locations.
          Therefore, <span>===</span> returns false because it checks whether
          both variables <span>point</span> to the same reference, not whether
          the <span>contents</span> are the same.
        </p>

        <div className="mt-8">
          <h3>But If They Point to the Same Reference:</h3>

          <CodeDisplay
            code={`
const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1 === arr2); // true
          `}
          />

          <p>
            In this case, arr2 is assigned the same reference as arr1, so both
            variables point to the same array in memory. Any changes to arr1
            will affect arr2, and vice versa.
          </p>
        </div>
      </Article>

      <Article title={"Introduction to Array methods"}>
        <p>
          Array methods in JavaScript <span>let</span> you easily manipulate and
          work with list data. They <span>help</span> with tasks like adding,
          removing, searching, filtering, and transforming elements,{" "}
          <span>making</span> your code cleaner and more efficient.
        </p>
      </Article>

      <Article title={"push() – Add to the End"}>
        <p>
          Adds one or more elements to the end of an array and returns the new
          length.
        </p>

        <CodeDisplay
          code={`
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]
        `}
        />
      </Article>

      <Article title={"pop() – Remove from the End"}>
        <p>
          Removes the <span>last</span> element of an array and{" "}
          <span>returns</span> it. You can <span>store</span> the deleted
          element in the variable.
        </p>

        <CodeDisplay
          code={`
const fruits = ["apple", "banana", "orange"];
const removed = fruits.pop();

console.log(removed); // "orange"
console.log(fruits);  // ["apple", "banana"]
        `}
        />
      </Article>

      <Article title={"shift() – Remove from the Beginning"}>
        <p>
          Removes the <span>first</span> element of an array and{" "}
          <span>returns</span> it. The remaining elements are shifted.
        </p>

        <CodeDisplay
          code={`
const numbers = [1, 2, 3];
const first = numbers.shift();

console.log(first);   // 1
console.log(numbers); // [2, 3]
        `}
        />
      </Article>

      <Article title={"unshift() – Add to the Beginning"}>
        <p>
          Adds one or more elements to the <span>start</span> of the array and
          <span> returns</span> the new length.
        </p>

        <CodeDisplay
          code={`
const numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
        `}
        />
      </Article>

      <Article title={"map() – Transform Elements"}>
        <p>
          Creates a <span>new array</span> by applying a{" "}
          <span>callback function</span> to each element in the original array.
        </p>

        <CodeDisplay
          code={`
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
        `}
        />
      </Article>

      <Article title={"filter() – Select Elements Based on Condition"}>
        <p>
          Returns a <span>new</span> array with only the elements that{" "}
          <span>pass</span> a test (return true in the callback function).
        </p>

        <CodeDisplay
          code={`
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4]
        `}
        />
      </Article>

      <Article title={"forEach() – Loop Over Elements"}>
        <p>
          Executes a <span>function</span> for <span>each</span> element in the
          array. Does <span>not return</span> a new array. For each always
          return <span>undefined.</span>
        </p>

        <CodeDisplay
          code={`
const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));
        `}
        />
      </Article>

      <Article title={"find() – Find the First Matching Element"}>
        <p>
          Returns the <span>first</span> element that <span>satisfies</span> the
          provided condition. If none match, it returns <span>undefined.</span>
        </p>

        <CodeDisplay
          code={`
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const person = people.find(p => p.age > 26);
console.log(person); // { name: "Bob", age: 30 }
        `}
        />
      </Article>

      <Article title={"includes() – Check if Array Contains a Value"}>
        <p>
          Returns <span>true</span> if the array <span>contains</span> a certain
          value, otherwise <span>false.</span>
        </p>

        <CodeDisplay
          code={`
const colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // true
console.log(colors.includes("black")); // false
        `}
        />
      </Article>

      <Article title={"slice() – Copy Part of an Array"}>
        <p>
          Returns a <span>shallow copy</span> of a portion of an array{" "}
          <span>without modifying</span> the original.
        </p>

        <CodeDisplay
          code={`
const letters = ["a", "b", "c", "d"];
const part = letters.slice(1, 3);
console.log(part);    // ["b", "c"]
console.log(letters); // ["a", "b", "c", "d"]
        `}
        />
      </Article>

      <Article title={"join() – Convert Array to String"}>
        <p>
          Joins all array elements into a single string, with an{" "}
          <span>optional</span> separator.
        </p>

        <CodeDisplay
          code={`
const words = ["Hello", "world"];
const result = words.join(" ");
console.log(result); // "Hello world"
        `}
        />
      </Article>

      <Article title={"sort() – Sort Elements"}>
        <p>
          Sorts the elements of an array in place and <span>returns</span> the
          sorted array. By default, it sorts as strings in{" "}
          <span>Unicode order,</span> so for numbers, you should{" "}
          <span>provide</span> a compare function.
        </p>

        <CodeDisplay
          code={`
const names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie"]
        `}
        />

        <CodeDisplay
          code={`
const numbers = [10, 1, 5];

numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 10]
        `}
        />
      </Article>

      <Article title={"split() – Convert a String into an Array"}>
        <p>
          Splits a string into an array of substrings using a{" "}
          <span>specified</span> separator.
        </p>

        <CodeDisplay
          code={`
const text = "apple,banana,orange";
const fruits = text.split(",");
console.log(fruits); // ["apple", "banana", "orange"]
        `}
        />
      </Article>

      <p>
        Arrays are a <span>fundamental data structure</span> in JavaScript,
        allowing us to <span>store</span> and <span>organize</span> multiple
        values efficiently. As objects, they <span>come</span> with a powerful
        set of built-in methods that make it easy to add, remove, search, and
        transform data. Understanding how arrays work—especially their reference
        behavior—and mastering popular methods like push(), map(), filter(), and
        sort() <span>enables</span> developers to <span>write</span> cleaner,
        more efficient, and readable code. Whether you’re <span>handling</span>{" "}
        lists of data, manipulating strings, or performing complex operations,
        array methods are <span>essential tools</span> in every JavaScript
        developer’s toolkit.
      </p>
    </Chapter>
  );
}
