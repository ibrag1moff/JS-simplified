import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";
import ProTip from "@/widgets/Protip";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function LoopsPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title={"Loops in JavaScript"} />

        <Article>
          <h3>
            “Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.”
          </h3>
          <p className={"ml-auto"}>- Martin Fowler</p>
        </Article>

        <Article>
          <p>
            Loops are one of the most fundamental constructs in programming.
            They allow developers to execute a block of code repeatedly, saving
            time, reducing redundancy, and enhancing flexibility.
          </p>

          <p>
            Imagine you’re asked to print numbers from 1 to 100. Would you
            really write:
          </p>

          <CodeDisplay
            code={`
console.log(1);
console.log(2);
// ...
console.log(100);
        `}
          />

          <p>
            In JavaScript, there are several types of loops that you can use to
            execute a block of code repeatedly. Each loop serves a different
            purpose and can be used based on the specific needs of your program.
            There are five main types of loops in JavaScript. Here they are:
            for, while, do...while, for...in, and for...of.
          </p>
        </Article>

        <Article title={"For loop"}>
          <p>
            The for loop is one of the most commonly used loops in JavaScript.
            It is ideal when you know in advance how many times you want the
            loop to run. The for loop consists of three parts: the
            initialization, the condition, and the final expression (usually
            used to increment or decrement a counter).
          </p>

          <CodeDisplay
            code={`
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
        `}
          />

          <p>
            In this example, the loop starts with i = 1, continues to run as
            long as i is less than or equal to 100, and increments i by 1 after
            each iteration. This structure makes the for loop perfect for
            situations where you’re iterating through a known range of values,
            such as printing numbers, accessing array elements, or repeating a
            task a set number of times.
          </p>
        </Article>

        <Article title={"While loop"}>
          <p>
            The while loop in JavaScript is used when you want to repeat a block
            of code an unknown number of times, but as long as a specific
            condition remains true. Unlike the for loop, the while loop only
            requires a condition to be checked before each iteration. If the
            condition evaluates to true, the code inside the loop executes;
            otherwise, the loop stops.
          </p>

          <CodeDisplay
            code={`
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}
        `}
          />

          <p>
            In this case, the loop starts with i = 1 and continues printing
            numbers until i exceeds 100. Be cautious when using while loops — if
            the condition never becomes false, the loop will run forever,
            creating an infinite loop. Therefore, it’s essential to ensure that
            something inside the loop changes the condition over time.
          </p>

          <CodeDisplay
            code={`
while (true) {
  console.log("This will run forever!");
}
        `}
          />

          <p>
            In this example, the condition true is always satisfied, so the loop
            will continue running endlessly unless you manually stop it (e.g.,
            with a break statement or by terminating the program). Be careful
            when writing infinite loops—they can crash your program or browser
            if not handled properly.
          </p>

          <ProTip
            title={
              "If the condition in a while loop is false from the very beginning, the loop will not execute at all. The while loop checks the condition before running the code inside, so if the condition isn’t met initially, the loop body is completely skipped."
            }
          />
        </Article>

        <Article title={"Do...while"}>
          <p>
            The do...while loop in JavaScript is similar to the while loop, but
            with one key difference: it always executes the code block at least
            once, regardless of whether the condition is true or false. This is
            because the condition is checked after the loop body has run.
          </p>

          <CodeDisplay
            code={`
let i = 101;
do {
  console.log(i); 
  i++;
} while (i <= 100);
        `}
          />

          <p>
            In this example, even though i starts at 101 and the condition i
            &#8804; 100 is false, the message will still be printed once. This
            behavior makes do...while useful when you want the code inside the
            loop to run at least once before the condition is evaluated.
          </p>

          <p>
            The main difference between while and do...while is when the
            condition is checked—while checks it before executing the loop body,
            while do...while checks it after.
          </p>
        </Article>

        <Article title={"For...in"}>
          <p>
            The for...in loop in JavaScript is used to iterate over the
            enumerable properties of an object. It’s especially useful when you
            want to access all the keys (or property names) in an object one by
            one.
          </p>

          <CodeDisplay
            code={`
const person = {
  name: "John",
  age: 25,
  city: "Baku"
};

for (let key in person) {
  console.log(key, person[key]);
}
        `}
          />

          <p>
            In this example, the for...in loop goes through each key in the
            person object (name, age, city) and logs both the key and its
            corresponding value.
          </p>

          <p>
            For...in is meant for objects, not arrays. Although it can
            technically be used with arrays, it’s not recommended because it
            iterates over all enumerable properties, including inherited ones,
            and the order is not guaranteed.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <h3>forEach in Objects</h3>

            <p>
              Although the forEach() method is designed for arrays, you can
              still use it with objects by combining it with Object.keys(). The
              Object.keys() method returns an array of an object’s own
              enumerable property names (keys), which you can then loop through
              using forEach(). This approach allows you to perform actions on{" "}
              each key-value pair in the object. For example:
            </p>

            <CodeDisplay
              code={`
const person = {
  name: "John",
  age: 25,
  city: "Baku"
};

Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});
          `}
            />

            <p>
              In this example, Object.keys(person) returns an array like
              [&quot;name&quot;, &quot;age&quot;, &quot;city&quot;], and
              forEach() loops over each key, allowing access to both the key and
              its corresponding value. This is a clean and readable way to
              iterate over objects when you want to use modern array methods.
            </p>

            <p>
              Also, we have Object.values() method in JavaScript returns an
              array containing the values of all enumerable properties of an
              object. It’s useful when you only need to work with the values and
              not the keys.
            </p>

            <CodeDisplay
              code={`
const person = {
  name: "John",
  age: 25,
  city: "Baku"
};

console.log(Object.values(person)); // ["John", 25, "Baku"]
          `}
            />
          </div>
        </Article>

        <Article title={"For...of"}>
          <p>
            The for...of loop in JavaScript is used to iterate over iterable
            objects, such as arrays, strings, maps, sets, and more. Unlike
            for...in, which iterates over property keys, for...of iterates
            directly over the values of the iterable.
          </p>

          <CodeDisplay
            code={`
const numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num); // 10, 20, 30
}
        `}
          />

          <p>You can also use for...of with strings:</p>

          <CodeDisplay
            code={`
for (let char of "Hello") {
  console.log(char);
}
        `}
          />

          <p>
            For...of does not work on plain objects directly, because objects
            are not iterable by default. If you want to iterate over an object’s
            values or entries, you can use Object.values() in combination with{" "}
            for...of.
          </p>
        </Article>

        <Article>
          <p>
            Loops are essential tools in JavaScript that help automate
            repetitive tasks and make your code cleaner and more efficient. Each
            type of loop has its own purpose and use case:
          </p>

          <ul>
            <li>
              <span className="font-bold">for loop</span> is best when you know
              how many times to repeat something.
            </li>

            <li>
              <span className="font-bold">while loop</span> is useful when you
              want to repeat code as long as a condition remains true.
            </li>

            <li>
              <span className="font-bold">do...while</span> loop guarantees that
              the code runs at least once before checking the condition.
            </li>

            <li>
              <span className="font-bold">for...in</span> loop is used to
              iterate over the keys of an object.
            </li>

            <li>
              <span className="font-bold">for...of</span> loop is used to
              iterate over the values of iterable objects like arrays and
              strings.
            </li>
          </ul>

          <p>
            Additionally, while forEach() is an array method, it can be used
            with objects by converting their keys, values into arrays using
            Object.keys(), Object.values().
          </p>
        </Article>
      </Chapter>
    </ProtectedRoute>
  );
}
