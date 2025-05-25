import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function OperatorsPage() {
  return (
    <Chapter>
      <SectionTitle title="Operators" />

      <Article>
        <p>
          In any programming language, operators are essential building blocks
          that allow you to perform calculations, compare values, assign data,
          and more. In JavaScript, operators come in many forms, and
          understanding how they work — especially the subtle differences
          between unary, binary, prefix, and postfix usage — can significantly
          deepen your grasp of how the language behaves under the hood.
        </p>
      </Article>

      <Article title="The basics">
        <p>
          At its core, an operator is a special symbol or keyword that performs
          an operation on one or more values (called operands). For example, in
          the expression 5 + 3, the + is an operator that tells JavaScript to
          add the two numbers.
        </p>

        <p>
          But not all operators are created equal. Some work with one operand,
          and others need two. This brings us to unary and binary operators.
        </p>
      </Article>

      <Article title="Unary vs Binary Operators">
        <p>
          A binary operator works with two operands. This is the most common
          type of operator you’ll encounter. For instance:
        </p>

        <CodeDisplay code={`let result = 10 - 3;`} />

        <p>
          {" "}
          Here, <span>-</span> is a binary operator that subtracts 3 from 10.
        </p>

        <p className="mt-8">
          In contrast, a unary operator works with only one operand. A simple
          example is the unary minus, which negates a number:
        </p>

        <CodeDisplay
          code={`let x = 5;
let y = -x; // -5 `}
        />
      </Article>

      <Article title="Prefix and Postfix Forms">
        <p>
          The increment (++) and decrement (--) operators are interesting
          because they can appear before or after the variable. This changes how
          the value is used within an expression.
        </p>

        <h3 className="text-primary mt-8">Prefix form (++x or --x)</h3>
        <p>
          When the operator appears before the variable, JavaScript will
          increase or decrease the value first, then use the new value in the
          expression.
        </p>

        <CodeDisplay
          code={`let a = 2;
let b = ++a;
console.log(a); // 3
console.log(b); // 3`}
        />

        <h3 className="text-primary mt-8">Postfix form (x++ or x--)</h3>
        <p>
          In postfix form, JavaScript will use the current value first, and then
          increment or decrement it.
        </p>

        <CodeDisplay
          code={`let a = 2;
let b = a++; 
console.log(a); // 3
console.log(b); // 2`}
        />

        <p>
          This small difference often becomes important when these expressions
          are used inside loops or conditional logic.
        </p>
      </Article>

      <Article title="Types of Operators in JavaScript">
        <p>
          Now that we understand the shape and behavior of operators, let’s
          explore the different categories of operators available in JavaScript
          through natural examples and explanation.
        </p>
      </Article>

      <Article title="Arithmetic Operators">
        <p>These are used for mathematical calculations:</p>
        <CodeDisplay
          code={`let x = 10;
let y = 4;

console.log(x + y); // 14
console.log(x - y); // 6
console.log(x * y); // 40
console.log(x / y); // 2.5
console.log(x % y); // 2`}
        />

        <p>The increment (++) and decrement (--) operators also belong here.</p>
      </Article>

      <Article title="Assignment Operators">
        <p>
          Assignment operators assign values to variables. The most basic one is
          =, but there are shorthand variations that combine with arithmetic:
        </p>

        <CodeDisplay
          code={`let total = 10;
total += 5;
console.log(total); // 15`}
        />

        <p>total += 5 is the same as total = total + 5.</p>
        <p>There’s also -=, *=, /=, and others that behave similarly.</p>
      </Article>

      <Article title="Comparison Operators">
        <p>These compare two values and return a boolean (true or false):</p>

        <CodeDisplay
          code={`console.log(5 > 3);  // true
console.log(5 == "5"); // true 
console.log(5 === "5"); // false 
console.log(5 !== 3); // true`}
        />

        <p>
          Be especially careful with === vs ==. The first performs type
          coercion, while the second checks both value and type.
        </p>
      </Article>

      <Article title="Logical Operators">
        <p>Logical operators are used to combine boolean expressions:</p>

        <CodeDisplay
          code={`let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false 
console.log(isAdult || hasID); // true 
console.log(!isAdult);         // false`}
        />

        <p>There are three types of logical operators:</p>
        <ul>
          <li>
            <span className="text-primary font-semibold">&& (AND) - </span>
            returns true only if both operands are true.
          </li>
          <li>
            <span className="text-primary font-semibold">|| (OR) - </span>
            returns true if at least one operand is true.
          </li>
          <li>
            <span className="text-primary font-semibold">
              ! (Logical NOT) -{" "}
            </span>
            flips the value: true becomes false, and false becomes true.
          </li>
        </ul>

        <p>These are crucial when making decisions in conditions.</p>
      </Article>

      <Article>
        <p>
          In JavaScript, when you write a condition — like inside an if
          statement — you’re not always explicitly comparing something to true
          or false. Instead, JavaScript evaluates the value in a boolean
          context, and decides: “Is this truthy or falsy?”
        </p>

        <p>
          Now, most values in JavaScript are considered truthy, meaning they
          behave like true when evaluated in a condition. But there’s a small
          set of values that are considered falsy — and if you use one of those
          in a conditional statement, JavaScript treats it as false.
        </p>

        <p>
          This can lead to elegant, concise code, but it also means you have to
          know what’s happening under the hood.
        </p>

        <CodeDisplay
          code={`if ("hello") {
  console.log("This runs!");
}`}
        />

        <p>
          Even though &quot;hello&quot; isn’t explicitly true, JavaScript treats
          any non-empty string as truthy, so the message will be logged. But if
          you try the same with an empty string:
        </p>

        <CodeDisplay
          code={`if ("") {
  console.log("This won't run.");
}`}
        />

        <p>
          Nothing happens. Why? Because &quot;&quot; is one of the few falsy
          values. Others include 0, false, null, undefined, NaN, and a
          lesser-known one: negative zero (-0), which exists in JavaScript and
          behaves a lot like zero in most cases.
        </p>

        <p>
          So when people say “everything in JavaScript is truthy except 0, null,
          undefined, ‘’, false,” they’re basically pointing out that these are
          the exceptions — everything else, even things you might assume are
          “empty” or “nothing,” still count as truthy.
        </p>

        <p>
          For instance, an empty array [] and an empty object {} — both seem
          “empty,” but they are considered truthy. If you write:
        </p>

        <CodeDisplay
          code={`if ([]) {
  console.log("An empty array is still truthy!");
}`}
        />

        <p>
          That message prints. The same goes for functions, symbols, and even
          strings with just a space like &quot; &quot; — all of these are truthy
          because they’re not in that tiny group of explicitly falsy values.
        </p>
      </Article>

      <Article>
        <p>
          Operators are the core of every JavaScript expression. Whether you’re
          adding numbers, comparing values, making decisions, or assigning data,
          you’re using operators — often without realizing it.
        </p>
      </Article>
    </Chapter>
  );
}
