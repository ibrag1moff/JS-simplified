import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ObjectsPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title={"Objects"} />

        <Article>
          <p>
            Objects in JavaScript are collections of{" "}
            <span>key-value pairs</span> used to store and <span>organize</span>{" "}
            data. Each key (also called a property) maps to a value, which can
            be <span>any</span> data type, including functions and other
            objects.
          </p>
          <p>
            Objects in JavaScript are <span>reference types,</span> meaning they
            store a reference (memory address) to the actual data,{" "}
            <span>not</span> the data itself. When you assign or pass an{" "}
            <span>object, </span>
            you’re copying the reference, so changes affect the{" "}
            <span>original</span> object.
          </p>

          <CodeDisplay
            code={`
let person = {
    name: 'John',
    age: 42,
    job: 'Frontend Developer',
    university: {
        name: 'Harvard',
        studentId: 'kfiojfodHIUFHuif979'
    },
    greetings: function(){
        console.log('Hello World!');
    }
}
        `}
          />

          <p>
            Object syntax in JavaScript uses curly braces with{" "}
            <span>key-value</span> pairs, where keys are property names and
            values can be any type. As shown in the person object, we can also
            include <span>functions</span> (called methods) and even other{" "}
            <span>nested</span> objects as values.
          </p>

          <p>
            Methods are <span>functions</span> that are defined as{" "}
            <span>properties</span> of an object. They allow the object to
            perform
            <span> actions</span> using its own data.
          </p>
        </Article>

        <Article title={"Accessing, Modifying, and Deleting Object Properties"}>
          <p>
            In JavaScript, we use <span>two</span> main ways to access or modify
            object properties: <span>dot</span> notation and{" "}
            <span>bracket</span> notation. Both allow us to read, create,
            update, or delete fields in an object, <span>depending on</span> the
            situation.
          </p>

          <div className={"mt-4"}>
            <p>
              Accessing a <span>name</span> property in person object
            </p>
            <CodeDisplay
              code={`
// Dot notation
console.log(person.name);             // "John"

// Bracket notation
console.log(person['name']);        // "John"

        `}
            />
          </div>

          <p>
            We’ll continue using <span>dot notation</span> moving forward, as
            it’s cleaner, easier to read, and preferred when property names are
            known and valid identifiers.
          </p>

          <div className={"mt-4"}>
            <p>
              Modifying & Deleting an <span>age</span> property in person object
            </p>

            <CodeDisplay
              code={`
person.age = 18
delete person.age
          `}
            />

            <p>
              To delete a property, you use the <span>delete</span> keyword.
            </p>
          </div>

          <div className={"mt-4"}>
            <p>
              You can create <span>new fields</span> by directly assigning a
              value to a property:
            </p>
            <CodeDisplay
              code={`
person.city = "Baku"
          `}
            />

            <p>Now the person object has the city property.</p>
          </div>
        </Article>

        <Article title={"Property with the Same Name as the Key"}>
          <p>
            When <span>defining</span> properties in an object, if the property
            name and the variable name are <span>the same,</span> you can use{" "}
            <span>shorthand</span> syntax. This is a concise way to create
            objects in JavaScript.
          </p>

          <CodeDisplay
            code={`
let name = "John";
let age = 42;

let person = {
  name,      // name: name
  age        // age: age
};

console.log(person.name);  // "John"
console.log(person.age);   // 42
        `}
          />

          <p>
            In this case, the property name in the object is automatically
            assigned the value of the name variable, and similarly for age. This
            shorthand is only possible when the key and the value variable have
            the same name.
          </p>
        </Article>

        <Article
          title={"Global Objects in JavaScript: window, global, and globalThis"}
        >
          <p>
            JavaScript has a concept of a <span>global object,</span> which is
            the top-level object that provides access to globally available
            variables, functions, and other objects.
          </p>

          <p>
            Depending on the <span>environment,</span> the name of the global
            object differs:
          </p>

          <div className="flex flex-col gap-3 mt-4">
            <h3>🌐 Browser: window</h3>
            <p>
              In browsers, the global object is called <span>window.</span> It
              represents the global scope and contains all global variables and
              functions.
            </p>
            <CodeDisplay
              code={`
const name = "John";
console.log(window.name); // "John"
console.log(window.alert === alert); // true
          `}
            />
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <h3>💻 Node.js: global</h3>
            <p>
              In Node.js, the global object is called <span>global.</span> It
              serves the same purpose as window, but it’s specific to the Node
              environment.
            </p>
            <CodeDisplay
              code={`
global.greeting = "Hello from Node";
console.log(global.greeting); // "Hello from Node"
          `}
            />
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <h3>🌍 Universal: globalThis</h3>
            <p>
              To write environment-independent code, JavaScript introduced
              <span>globalThis,</span> a standard way to access the global
              object across any environment (browser, Node, etc.).
            </p>
            <CodeDisplay
              code={`
console.log(globalThis);
globalThis.test = 123;
console.log(globalThis.test); // 123
          `}
            />
          </div>

          <p>
            In this chapter, we covered the <span>basics of objects</span> in
            JavaScript, including how to create, access, modify, and delete
            properties using dot and bracket notation. We also explored
            important concepts like <span>global objects</span> and how objects
            are used in different contexts. Understanding these fundamentals
            will help you efficiently work with objects in your JavaScript
            projects.
          </p>
        </Article>
      </Chapter>
    </ProtectedRoute>
  );
}
