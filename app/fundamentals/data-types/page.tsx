import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import ProTip from "@/widgets/Protip";
import SectionTitle from "@/widgets/SectionTitle";
import Link from "next/link";

export default function DataTypesPage() {
  return (
    <Chapter>
      <SectionTitle title="Data Types" />

      <Article>
        <p>
          In JavaScript, data types define the kind of value a variable can
          hold. Understanding data types is crucial because different types
          behave differently, and knowing them helps you write better code.
        </p>

        <p>There are two main categories of data types in JavaScript:</p>

        <ul>
          <li>
            <span className="font-bold">Primitive types</span> — simple values
            that hold data directly.
          </li>
          <li>
            <span className="font-bold">Reference types </span> — objects and
            arrays that store collections or more complex data.
          </li>
        </ul>
      </Article>

      <Article title="1. Primitive Data Types">
        <p>
          Primitive types store single, immutable values. When you assign or
          copy them, you get a copy of the actual value.
        </p>

        <p>There are 7 primitive types in JavaScript:</p>
      </Article>

      <Article title="String">
        <p>
          String is a sequence of characters used to represent text. To create a
          string you need to use either single quotes or double quotes (also
          backsticks for template literals). You can learn more about strings{" "}
          <Link
            className="font-semibold text-primary underline"
            href={"/fundamentals/strings"}
          >
            here.
          </Link>
        </p>

        <CodeDisplay
          code={`const greeting = "Hello, world!";
const singleQuote = 'JavaScript';`}
        />
      </Article>

      <Article title="Number">
        <p>
          Number represents all numeric values: integers, decimals (floating
          point), positive and negative numbers.
        </p>

        <CodeDisplay
          code={`const age = 30;
const price = 19.99;
const negative = -5;
const zero = 0;`}
        />
      </Article>

      <Article title="Boolean">
        <p>
          Boolean represents a logical entity that can be either true or false.
          For a variable to be a type of boolean, simply use the literals true
          or false.
        </p>

        <p>Booleans commonly used in conditions and control flow</p>

        <CodeDisplay
          code={`const isLoggedIn = true;
const hasPaid = false;`}
        />
      </Article>

      <Article title="Undefined">
        <p>
          A variable that has been declared but not yet assigned a value.
          Undefined is a type and also a value. JavaScript automatically assigns
          undefined to uninitialized variables.
        </p>

        <CodeDisplay
          code={`let name;
console.log(name);  // undefined`}
        />
      </Article>

      <Article title="Null">
        <p>
          Represents the intentional absence of any object value.To get the
          value null assign it explicitly.
        </p>

        <CodeDisplay code={`let data = null;`} />

        <p>Null means &#8221;no value&#8221; or &#8221;empty&#8221;</p>

        <ProTip title="Null is an explicit assignment meaning “no value,” while undefined means a variable has been declared but not yet assigned any value. In short, null is intentional emptiness, and undefined is uninitialized." />
      </Article>

      <Article title="Symbol">
        <p>
          Represents a unique and immutable identifier. To create use Symbol()
          factory function. Often used to create unique property keys in
          objects.
        </p>

        <CodeDisplay
          code={`const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false`}
        />

        <p>As you can see here all symbols are unique.</p>
      </Article>

      <Article title="BigInt">
        <p>
          Represents integers larger than the safe integer limit for Numbers
          (2^53 - 1). For a integer to be a type of BigInt, you need to add n at
          the end of the number or use the BigInt() constructor
        </p>

        <CodeDisplay
          code={`let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt("900719925474099123456789");`}
        />

        <p>
          BigInt and Number are different types and cannot be mixed in
          operations. Use BigInt when working with really large integers
          (cryptography, large counters).
        </p>
      </Article>

      <Article title="Important note about Primitives">
        <p>
          Primitive values cannot be changed. If you change a primitive, a new
          value is created.
        </p>

        <CodeDisplay
          code={`let a = 10;
let b = a;   
a = 20;`}
        />

        <p>In this example, b = 10, then a changes to 20 but b remains 10</p>

        <span className="text-lg font-medium">
          Primitives are compared by value.
        </span>
      </Article>

      <Article title="2. Reference Data Type (Objects)">
        <p>
          Reference types store collections of data or more complex entities.
          Instead of storing the actual value, variables hold a reference (or
          pointer) to the location in memory where the object is stored.
        </p>

        <CodeDisplay
          code={`const person = {
  name: "Alice",
  age: 30,
};`}
        />

        <p>
          When you copy a reference type, you copy the reference, not the actual
          object.
        </p>

        <CodeDisplay
          code={`
const obj1 = { name: "Alice" };
const obj2 = obj1;  
obj2.name = "Bob";
console.log(obj1.name);  // "Bob"
            `}
        />

        <p>
          Changes made through one reference affect all references to the same
          object.
        </p>
      </Article>

      <Article title=" Checking Data Types">
        <p>You can check the type of a value using the typeof operator:</p>

        <CodeDisplay
          code={`console.log(typeof "hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"  (this is a JavaScript quirk!)
console.log(typeof Symbol());     // "symbol"
console.log(typeof 10n);          // "bigint"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"  (arrays are objects)
console.log(typeof function(){}); // "function"`}
        />

        <ProTip title="null is a primitive representing no value, but typeof null returns object due to a legacy JavaScript bug. Just remember null means an intentionally empty value." />
      </Article>

      <Article>
        <p>
          Data types are the foundation for understanding how your data is
          stored and manipulated in JavaScript. Primitives are simple, immutable
          values stored directly, while reference types point to complex objects
          in memory. Knowing this distinction helps avoid common bugs and write
          efficient, predictable code.
        </p>
      </Article>
    </Chapter>
  );
}
