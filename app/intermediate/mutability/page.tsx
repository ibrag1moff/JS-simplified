import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import ProTip from "@/widgets/Protip";
import SectionTitle from "@/widgets/SectionTitle";

export default function ReferenceBehaviorPage() {
  return (
    <Chapter>
      <SectionTitle title="Reference behavior" />

      <Article>
        <p>
          In JavaScript, understanding how data is stored and passed—by value or
          by reference—is critical for writing clean, bug-free code. This
          chapter explores the concept of reference behavior, explains the
          difference between primitive and reference types, and provides
          real-world examples to demonstrate common pitfalls and best practices.
        </p>
      </Article>

      <Article title="Value types">
        <p>
          Primitive types are passed by value. This means that when you assign
          or pass them to a function, a copy of the value is made.
        </p>

        <p>Primitive types in JavaScript include:</p>

        <ul>
          <li>string</li>
          <li>number</li>
          <li>boolean</li>
          <li>null</li>
          <li>undefined</li>
          <li>bigint</li>
          <li>symbol</li>
        </ul>

        <CodeDisplay
          code={`let a = 10;
let b = a; 
b = 20;

console.log(a); // 10
console.log(b); // 20`}
        />

        <p>
          In this example b gets a copy of a's value. Changing b does not affect
          a, since they are two separate copies.
        </p>
      </Article>

      <Article title="Reference Types">
        <p>
          Non-primitive types (i.e., objects, including arrays and functions)
          are passed by reference. This means that variables store a reference
          (or pointer) to the data, not the actual data itself.
        </p>

        <CodeDisplay
          code={`let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"`}
        />

        <p>
          Both obj1 and obj2 point to the same object in memory. Changes through
          one reference affect the other.
        </p>
      </Article>

      <Article title="Functions and References">
        <p>
          When you pass an object to a function, the function receives a
          reference to the original object. Any modifications inside the
          function will affect the original object.
        </p>

        <CodeDisplay
          code={`function update(obj) {
  obj.value = 42;
}

const myObj = { value: 0 };
update(myObj);

console.log(myObj.value); // 42`}
        />

        <p>
          However, reassigning the object itself inside the function does not
          affect the original reference.
        </p>

        <CodeDisplay
          code={`function replace(obj) {
  obj = { value: 99 }; 
}

const anotherObj = { value: 0 };
replace(anotherObj);

console.log(anotherObj.value); // 0`}
        />

        <p>
          Only the local reference inside replace was changed. The original
          anotherObj remained untouched.
        </p>
      </Article>

      <Article title="Cloning Objects and Arrays">
        <p>
          To avoid unintended side effects, it’s common to clone objects or
          arrays before modifying them.
        </p>

        <div className="mt-4">
          <h3>Shallow Cloaning</h3>
          <CodeDisplay
            code={`const original = { name: "Alice" };
const copy = { ...original };

copy.name = "Bob";

console.log(original.name); // "Alice"`}
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <h3>Deep Cloaning</h3>
          <p>
            Shallow cloning only copies the first level. For nested structures,
            you’ll need deep cloning:
          </p>
          <CodeDisplay
            code={`const original = {
  name: "Alice",
  address: { city: "Baku" },
};


const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Ganja";

console.log(original.address.city); // "Baku"`}
          />
        </div>

        <ProTip title="JSON cloning doesn’t work well with functions, undefined, Date, Map, Set, etc." />

        <p>For complex structures, consider libraries like Lodash:</p>
        <CodeDisplay
          code={`import _ from "lodash";

const deepClone = _.cloneDeep(original);`}
        />
      </Article>

      <Article title="Reference Equality">
        <p>
          You cannot compare two objects or arrays directly based on their
          content using === or ==:
        </p>

        <CodeDisplay
          code={`console.log({} === {}); // false
console.log([1, 2] === [1, 2]); // false`}
        />

        <p>
          Because they are stored in different memory locations, even though
          their content is identical.
        </p>
      </Article>

      <Article>
        <p>
          Reference behavior is one of the core concepts that separate beginners
          from confident JavaScript developers. Knowing when data is copied and
          when it is shared helps prevent bugs related to unintended mutations
          and improves code reliability.
        </p>

        <p>
          Primitive types are simple and safe—they behave predictably because
          they are copied by value. However, objects, arrays, and functions
          introduce complexity, as they are passed by reference. This means that
          even small changes in one part of your code can ripple across your
          application if you are not careful.
        </p>

        <p>
          Mastering this concept will give you more control over your
          application behavior and make you a stronger, more mindful developer.
        </p>
      </Article>
    </Chapter>
  );
}
