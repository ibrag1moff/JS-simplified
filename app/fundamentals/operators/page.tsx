import CodeDisplay from "@/widgets/CodeDisplay";
import ProTip from "@/widgets/Protip";
import SectionTitle from "@/widgets/SectionTitle";

export default function OperatorsPage() {
  return (
    <div className="flex flex-col gap-24 px-5">
      <SectionTitle title="Operators and Expressions" />

      <div className="flex flex-col gap-4">
        <p>
          In JavaScript, an <span>expression</span> is any valid combination of
          values, variables, and operators that produces a <span>result.</span>{" "}
          At the heart of expressions are operators—symbols that perform actions
          on one or more operands (values or variables). Understanding how
          operators work is <span>essential</span> for controlling logic,
          performing calculations, and <span>building</span> dynamic programs.
        </p>

        <p>Here are basic operator types</p>
        <ul>
          <li>Arithmetic Operators</li>
          <li>Assignment Operators</li>
          <li>Comparison Operators</li>
          <li>Logical Operators</li>
          <li>String Concatenation Operator</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Arithmetic Operators</h3>
        <p>
          These are used for <span>basic</span> math.
        </p>

        <CodeDisplay
          code={`
let sum = 10 + 5;      // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5;    // Multiplication
let quotient = 10 / 2;   // Division
let remainder = 10 % 3;  // Modulo (remainder)
            `}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>Assignment Operators</h3>
        <p>
          Used to assign <span>values</span> to variables.
        </p>

        <CodeDisplay
          code={`
let x = 5;   // Basic assignment
x += 2;      // Equivalent to x = x + 2
x *= 3;      // Equivalent to x = x * 3
            `}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>Comparison Operators</h3>
        <p>
          Comparison operators in JavaScript are used to <span>compare</span>{" "}
          two values and <span>determine</span> their relationship. The result
          is always a boolean — either true or false. They’re most often used in
          <span>conditionals</span> like if, while, or inside{" "}
          <span>expressions</span> that require a decision.
        </p>

        <div className="mt-4">
          <p>Basic comparison operators:</p>
          <CodeDisplay
            code={`
5 > 3    // true
5 < 3    // false
5 >= 5   // true
5 <= 4   // false
            `}
          />
        </div>

        <p>Equality vs. Strict Equality:</p>
        <CodeDisplay
          code={`
5 == '5'     // true  → loose equality (performs type coercion)
5 === '5'    // false → strict equality (no type coercion)
            `}
        />
        <p>
          == checks for value after trying to <span>convert</span> the types,
          which can lead to <span>confusing</span> results. For example:
        </p>

        <CodeDisplay
          code={`
0 == false        // true
"" == false       // true
null == undefined // true
        `}
        />

        <ProTip
          title="Even NaN === NaN is false. To check
      if something is NaN, use Number.isNaN(value) instead."
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>Logical Operators</h3>

        <p>
          Logical operators <span>combine</span> boolean values or expressions.
        </p>

        <div className="mt-8">
          <p>AND (&&)</p>
          <p>
            Returns true only if both <span>conditions</span> are true.
          </p>
          <CodeDisplay
            code={`
true && true   // true
true && false  // false
    `}
          />
        </div>

        <div className="mt-8">
          <p>OR (||)</p>
          <p>
            Returns true if at least <span>one</span> condition is true.
          </p>
          <CodeDisplay
            code={`
false || true  // true
false || false // false
    `}
          />
        </div>

        <div className="mt-8">
          <p>NOT (!)</p>
          <p>
            <span>Inverts</span> a boolean value.
          </p>
          <CodeDisplay
            code={`
!true   // false
!false  // true
    `}
          />
        </div>

        <div className="mt-8">
          <p>You can combine these in conditions:</p>
          <CodeDisplay
            code={`
let age = 25;
if (age > 18 && age < 30) {
  console.log("Young adult");
}
    `}
          />
        </div>

        <ProTip title="Logical operators aren’t limited to just true and false. JavaScript returns the last evaluated operand, which allows you to write concise expressions:" />
        <CodeDisplay
          code={`
let user = isLoggedIn && getUserProfile();  // Only calls getUserProfile if isLoggedIn is true
        `}
        />

        <div className="flex flex-col gap-4">
          <h3>String Concatenation Operator</h3>

          <p>
            The string <span>concatenation</span> operator in JavaScript is
            simply the plus sign (+), and it’s used to <span>join</span> (or
            concatenate) two or more strings <span>together</span> into one.
          </p>

          <p>
            When you use + between two strings, JavaScript <span>merges</span>{" "}
            them into a single string. Even if one side is a <span>string</span>{" "}
            and the other is a number or another <span>type,</span> JavaScript
            will convert the <span>non-string</span> value into a string and
            then concatenate:
          </p>

          <CodeDisplay
            code={`
let result = 16 + "BMW"; // "16BMW"
            `}
          />
        </div>
      </div>
    </div>
  );
}
