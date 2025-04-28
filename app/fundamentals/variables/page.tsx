import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function VariablesPage() {
  return (
    <div className="flex flex-col gap-24 px-5">
      <SectionTitle title="Variables and Data Types" />
      <p>
        Variables are used to <span>store data</span>, such as numbers, text,
        and more. Understanding how to use <span>variables</span> and{" "}
        <span>data types</span> correctly is essential for writing{" "}
        <span>effective </span>
        code.
      </p>

      <div className="flex flex-col gap-4">
        <h3>What are Variables?</h3>
        <p>
          A variable is like a <span>container</span> that holds data. You can
          store different kinds of values in these containers, and you can
          change the data inside them as needed.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          To declare a <span>variable</span> in JavaScript, you use keywords
          like let, const, or var.
        </p>

        <ul className="ml-3">
          <li>
            <b className="text-primary">let:</b> Used to declare a variable that
            can be reassigned.
          </li>
          <li>
            <b className="text-primary">const:</b> Used to declare a variable
            that cannot be reassigned (i.e., constant values).
          </li>
          <li>
            <b className="text-primary">var:</b> An older way to declare
            variables (avoided in modern JavaScript, as it has some issues).
          </li>
        </ul>

        <CodeDisplay
          code={`
let name = "Alice";  // This can be changed later
const age = 30;      // This can't be changed
var city = "Baku";   // Old syntax
            `}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>What are Data Types?</h3>

        <p>
          In JavaScript, <span>data types</span> define what kind of value a
          variable can hold. JavaScript is a <span>dynamically typed</span>{" "}
          language, which means that you don’t need to specify a variable’s type
          when you declare it. The type of the variable is determined
          <span> automatically</span> based on the value <span>assigned</span>{" "}
          to it.
        </p>

        <p>
          There are <span>8 primary data types</span> in JavaScript:
        </p>

        <ul className="ml-3">
          <li>String</li>
          <li>Number</li>
          <li>Bigint</li>
          <li>Boolean</li>
          <li>Undefined</li>
          <li>Null</li>
          <li>Symbol</li>
          <li>Object</li>
        </ul>

        <p>
          The object data type can contain both <span>built-in objects</span>,
          and <span>user defined objects:</span>
        </p>

        <p>Built-in object types can be:</p>

        <p>
          objects, arrays, dates, maps, sets, intarrays, floatarrays, promises
          etc...
        </p>

        <CodeDisplay
          code={`
// Numbers:
let length = 20;
let weight = 75;

// Strings:
let color = "Red";
let lastName = "Smith";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2025-04-28");
            `}
        />
      </div>

      <div className="flex flex-col gap-4">
        <p>
          In JavaScript, when you use <span>+</span> between a number and a
          string, <span>JavaScript</span> automatically converts the number into
          a string and joins them together. This process is called{" "}
          <span>type coercion.</span>
        </p>

        <CodeDisplay
          code={`
let result = 16 + "BMW";
console.log(result);  // "16BMW"
          `}
        />

        <p>
          The + operator is special because it is used for both addition and
          string concatenation. When one of the values is a string, JavaScript
          chooses <span>concatenation.</span>
        </p>

        <p>
          <span>Concatenation</span> simply means joining two or more strings
          together to make one longer string.
        </p>

        <CodeDisplay
          code={`
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName);  // "John Doe"
          `}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>JavaScript Strings</h3>

        <p>
          A <span>string</span> is a sequence of <span>characters</span>, such
          as &quot;John Doe&quot;, used to represent text. Strings are always
          written inside quotes, and you can use either single (’ ’) or double
          (” “) quotation marks.
        </p>

        <CodeDisplay
          code={`
// Using double quotes:
let name = "John Doe";

// Using single quotes:
let name2 = 'John Doe';
          `}
        />

        <p>
          You can include quotes inside a string, as long as they are different
          from the quotes that wrap around the string.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>JavaScript Numbers</h3>

        <p>
          The <span>Number</span> type in JavaScript is used to represent both
          <span> integer</span> (whole) numbers and <span>floating-point</span>{" "}
          (decimal) numbers. Unlike some other languages, JavaScript does not
          have separate types for integers and decimals — everything is stored
          under the <span>single</span> Number type.
        </p>

        <CodeDisplay
          code={`
// With decimals
const x = 99.00

// Without decimals
const y = 99
          `}
        />

        <p>
          Extra large or extra small numbers can be written with scientific
          (exponential) notation:
        </p>

        <CodeDisplay
          code={`
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
          `}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>JavaScript BigInt</h3>

        <p>
          All numbers in JavaScript are stored using a{" "}
          <span>64-bit floating-point format.</span> <br />
          <br /> Starting from <span>ES2020</span>, JavaScript introduced a new
          data type called <span>BigInt</span>, which allows you to work with
          integer values that are too large to be accurately represented by the
          <span> regular</span> Number type.
        </p>

        <CodeDisplay
          code={`
let x = BigInt("123478574923878473987438903");
          `}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>JavaScript Booleans</h3>

        <p>
          A Boolean in JavaScript is a data type that can only have one of two
          values: <span>true</span> or <span>false.</span> <br />
          <br />
          <span>Booleans</span> are often used to make decisions in code — for
          example, to check if a <span>condition</span> is correct or not.
        </p>

        <CodeDisplay
          code={`
let isAdult = true;
let hasLicense = false;
          `}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>JavaScript Undefined</h3>

        <p>
          In JavaScript, <span>undefined</span> is a <span>special</span> value
          and also a <span>data type.</span> It means that a variable has been
          declared but has not been given a value yet.
        </p>

        <CodeDisplay
          code={`
let name;
console.log(name);  // undefined
          `}
        />

        <p>
          In this case, we created the variable name but didn’t assign anything
          to it. So JavaScript automatically gives it the value undefined.
        </p>

        <p>
          You can also get <span>undefined</span> whenever you try to access
          something that does not <span>exist</span> or <span>return</span>{" "}
          anything (functions){" "}
        </p>

        <CodeDisplay
          code={`
function greet() {
  console.log("Hello");
}

let result = greet();  
console.log(result);  // undefined (because greet() doesn't return anything)
`}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>JavaScript Null</h3>

        <p>
          In JavaScript, <span>null</span> is a special <span>value</span> that
          represents “no value” or “no object”. It is used to{" "}
          <span>explicitly </span>
          indicate that a variable or object property has no value assigned to
          it.
        </p>

        <CodeDisplay
          code={`
let car = null;
console.log(car);  // null
        `}
        />

        <p>
          In this case, we intentionally set the variable car to null, meaning
          it doesn’t reference any object or value.
        </p>

        <h3>Difference between undefined and null:</h3>

        <li>
          <span className="font-bold">undefined</span> means that a variable has
          been declared but not assigned a value.
        </li>
        <li>
          {" "}
          <span className="font-bold">null</span> is an explicit assignment to
          indicate the absence of a value.
        </li>
      </div>
      <div className="flex flex-col gap-4">
        <h3>JavaScript Symbols</h3>

        <p>
          A <span>Symbol</span> is a <span>unique</span> and{" "}
          <span>immutable</span> data type introduced in <span>ES6</span>{" "}
          (ECMAScript 2015). It represents a unique identifier that can be used
          as a key for object properties. Every Symbol is guaranteed to be
          unique, even if you create two Symbols with the same description.
        </p>

        <CodeDisplay
          code={`
let sym1 = Symbol("description");
let sym2 = Symbol("description");

console.log(sym1 === sym2);  // false (they are unique)
        `}
        />

        <p>
          In this example, even though both Symbols have the same description,
          they are different and not equal.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>JavaScript Objects</h3>

        <p>
          In JavaScript, an <span>object</span> is a data type used to store
          <span> collections</span> of data in the form of{" "}
          <span>key-value pairs.</span> The keys are usually called properties,
          and the values can be of any data type (including other objects).
        </p>

        <CodeDisplay
          code={`
let person = {
  name: "John Doe",       // Property "name" with value "John Doe"
  age: 30,                // Property "age" with value 30
  isActive: true,         // Property "isActive" with value true
  greet: function() {     // Property "greet" with a function value
    console.log("Hello, " + this.name);
  }
};

console.log(person.name);  // "John Doe"
person.greet();           // "Hello, John Doe"
`}
        />
      </div>

      <p>
        In this chapter, we learned about <span>variables</span> and{" "}
        <span>data types </span>
        in JavaScript, which are key to storing and working with{" "}
        <span>data</span>. We covered <span>primitive types</span> like strings,
        numbers, booleans, and more, as well as objects for organizing{" "}
        <span>complex</span> data. This knowledge sets the stage for writing
        clean and efficient code as you move <span>forward</span> with
        JavaScript.
      </p>
    </div>
  );
}
