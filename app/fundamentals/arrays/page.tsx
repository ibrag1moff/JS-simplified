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
          In JavaScript, arrays are one of the most commonly used data
          structures. They allow you to store multiple values in a single
          variable, making it easier to organize and work with related data.
          Whether you’re building a to-do list, managing user data, or working
          with collections of items, arrays provide the foundation for handling
          sets of information efficiently.
        </p>

        <p>
          This chapter will guide you through the fundamentals of arrays—how to
          create them, access elements, and perform operations like adding,
          removing, or ariable, making it easier to organize and work with
          related data. Whether you’re building a to-do list, managing user
          data, or workinp() to map(), filter(), and reduce(), these methods
          simplify many common programming tasks.
        </p>

        <p>
          By the end of this chapter, you’ll have a solid understanding of
          arrays and how to use them effectively in your JavaScript programs.
        </p>
      </Article>

      <Article title={"What is an Array?"}>
        <p>
          An array is a special variable that can hold multiple values in a
          single variable. Instead of creating separate variables for each item,
          you can group them together.
        </p>

        <p>
          Arrays can store any type of data — numbers, strings, booleans,
          objects, or even other arrays.
        </p>

        <CodeDisplay
          code={`const numbers = [1, 2, 3, 4, 5]

const fruits = ['banana', 'apple', 'orange']

const mixed = ['hello', 123, true]`}
        />
      </Article>

      <Article title={"Accessing Elements"}>
        <p>You can access elements by their index (starts at 0).</p>

        <CodeDisplay
          code={`const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana`}
        />
      </Article>

      <Article title={"Arrays are objects"}>
        <p>
          In JavaScript, arrays are a special kind of object designed for
          storing ordered values, and they inherit many features from objects,
          including the ability to access properties using dot notation. For
          instance, the .length property of an array tells you how many elements
          it contains. This works because arrays, being objects, can have both
          methods (like .push(), .pop()) and properties (like .length). You can
          access these just like with regular objects — using dot notation.
        </p>

        <CodeDisplay code={`const fruits = ["apple", "banana", "orange"];`} />

        <p>
          When you run this in the browser console, you’ll see that an array has
          properties like length and methods such as push, as well as a
          prototype object. You can even add your own custom properties to an
          array. Arrays also inherit internal methods and behaviors from the
          built-in Array constructor, which is itself an object. This shows that
          arrays in JavaScript are not just simple lists of values, but also
          full-featured objects with their own structure, properties, and
          capabilities.
        </p>
      </Article>

      <Article title={"Arrays as Reference Types in JavaScript"}>
        <p>
          In JavaScript, arrays are reference types, which means they are not
          compared or copied by their actual contents, but by their reference in
          memory. When you create an array, the variable doesn’t store the
          actual array data — it stores a reference (a pointer) to where the
          array lives in memory.
        </p>

        <CodeDisplay
          code={`const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

console.log(arr1 === arr2) // false`}
        />

        <p>
          Even though arr1 and arr2 look identical, they are two different
          arrays stored in different memory locations. Therefore, === returns
          false because it checks whether both variables point to the same
          reference, not whether the contents are the same.
        </p>

        <div className="mt-8">
          <h3>But If They Point to the Same Reference:</h3>

          <CodeDisplay
            code={`const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1 === arr2); // true`}
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
          Array methods in JavaScript let you easily manipulate and work with
          list data. They help with tasks like adding, removing, searching,
          filtering, and transforming elements, making your code cleaner and
          more efficient.
        </p>
      </Article>

      <Article title={"push() – Add to the End"}>
        <p>
          Adds one or more elements to the end of an array and returns the new
          length.
        </p>

        <CodeDisplay
          code={`const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]`}
        />
      </Article>

      <Article title={"pop() – Remove from the End"}>
        <p>
          Removes the last element of an array and returns it. You can store the
          deleted element in the variable.
        </p>

        <CodeDisplay
          code={`const fruits = ["apple", "banana", "orange"];
const removed = fruits.pop();

console.log(removed); // "orange"
console.log(fruits);  // ["apple", "banana"]`}
        />
      </Article>

      <Article title={"shift() – Remove from the Beginning"}>
        <p>
          Removes the first element of an array and returns it. The remaining
          elements are shifted.
        </p>

        <CodeDisplay
          code={`const numbers = [1, 2, 3];
const first = numbers.shift();

console.log(first);   // 1
console.log(numbers); // [2, 3]`}
        />
      </Article>

      <Article title={"unshift() – Add to the Beginning"}>
        <p>
          Adds one or more elements to the start of the array and returns the
          new length.
        </p>

        <CodeDisplay
          code={`const numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3]`}
        />
      </Article>

      <Article title={"map() – Transform Elements"}>
        <p>
          Creates a new array by applying a callback function to each element in
          the original array.
        </p>

        <CodeDisplay
          code={`const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]`}
        />
      </Article>

      <Article title={"filter() – Select Elements Based on Condition"}>
        <p>
          Returns a new array with only the elements that pass a test (return
          true in the callback function).
        </p>

        <CodeDisplay
          code={`const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4]`}
        />
      </Article>

      <Article title={"forEach() – Loop Over Elements"}>
        <p>
          Executes a function for each element in the array. Does not return a
          new array. For each always return undefined.
        </p>

        <CodeDisplay
          code={`const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));`}
        />
      </Article>

      <Article title={"find() – Find the First Matching Element"}>
        <p>
          Returns the first element that satisfies the provided condition. If
          none match, it returns undefined.
        </p>

        <CodeDisplay
          code={`const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const person = people.find(p => p.age > 26);
console.log(person); // { name: "Bob", age: 30 }`}
        />
      </Article>

      <Article title={"includes() – Check if Array Contains a Value"}>
        <p>
          Returns true if the array contains a certain value, otherwise false.
        </p>

        <CodeDisplay
          code={`const colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // true
console.log(colors.includes("black")); // false`}
        />
      </Article>

      <Article title={"slice() – Copy Part of an Array"}>
        <p>
          Returns a shallow copy of a portion of an array without modifying the
          original.
        </p>

        <CodeDisplay
          code={`const letters = ["a", "b", "c", "d"];
const part = letters.slice(1, 3);
console.log(part);    // ["b", "c"]
console.log(letters); // ["a", "b", "c", "d"]`}
        />
      </Article>

      <Article title={"join() – Convert Array to String"}>
        <p>
          Joins all array elements into a single string, with an optional
          separator.
        </p>

        <CodeDisplay
          code={`const words = ["Hello", "world"];
const result = words.join(" ");
console.log(result); // "Hello world"`}
        />
      </Article>

      <Article title={"sort() – Sort Elements"}>
        <p>
          Sorts the elements of an array in place and returns the sorted array.
          By default, it sorts as strings in Unicode order, so for numbers, you
          should provide a compare function.
        </p>

        <CodeDisplay
          code={`const names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie"]`}
        />

        <CodeDisplay
          code={`const numbers = [10, 1, 5];

numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 10]`}
        />
      </Article>

      <Article title={"split() – Convert a String into an Array"}>
        <p>
          Splits a string into an array of substrings using a specified
          separator.
        </p>

        <CodeDisplay
          code={`const text = "apple,banana,orange";
const fruits = text.split(",");
console.log(fruits); // ["apple", "banana", "orange"]`}
        />
      </Article>

      <p>
        Arrays are a fundamental data structure in JavaScript, allowing us to
        store and organize multiple values efficiently. As objects, they come
        with a powerful set of built-in methods that make it easy to add,
        remove, search, and transform data. Understanding how arrays
        work—especially their reference behavior—and mastering popular methods
        like push(), map(), filter(), and sort() enables developers to write
        cleaner, more efficient, and readable code. Whether you’re handling{" "}
        lists of data, manipulating strings, or performing complex operations,
        array methods are essential tools in every JavaScript developer’s
        toolkit.
      </p>
    </Chapter>
  );
}
