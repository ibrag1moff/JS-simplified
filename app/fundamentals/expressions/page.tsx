import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import ProtectedRoute from "@/components/ProtectedRoute";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";
import Link from "next/link";

export default function ExpressionsPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title="Expressions" />

        <Article>
          <p>
            In JavaScript, expressions are the building blocks of any program.
            An expression is any valid piece of code that produces a value.
            Whenever JavaScript evaluates something and gives back a result —
            whether it’s a number, a string, a boolean, or even undefined —
            you’re dealing with an expression.
          </p>

          <p>Let’s start with a simple one:</p>

          <CodeDisplay code={`5 + 3`} />

          <p>
            This is a mathematical expression. It evaluates to 8. You can use it
            anywhere a value is expected. For example:
          </p>

          <CodeDisplay code={`const result = 5 + 3 // 8`} />

          <p>
            Here, 5 + 3 is an expression that produces a value, and that value
            gets stored in result.
          </p>
        </Article>

        <Article>
          <p>Now consider this:</p>

          <CodeDisplay code={`"Hello" + " " + "world"`} />

          <p>
            That’s also an expression — a string expression — which evaluates to
            &quot;Hello world&quot;.
          </p>

          <p>
            JavaScript expressions aren’t just about math or strings. They come
            in many forms:
          </p>
        </Article>

        <Article title="1. Literal expressions">
          <p>These are the most basic: just values written directly.</p>

          <CodeDisplay
            code={`10         // a number literal
"hi"       // a string literal
true       // a boolean literal`}
          />

          <p>
            All of these are expressions because they evaluate to themselves.
          </p>
        </Article>

        <Article title="2. Variable expressions">
          <p>
            When you use a variable, it’s also an expression — because it
            evaluates to whatever value the variable holds.
          </p>

          <CodeDisplay
            code={`let x = 20;
x`}
          />
        </Article>

        <Article title="3. Function call expressions">
          <p>
            When you call a function, it produces a value too — even if it’s
            undefined.
          </p>

          <CodeDisplay
            code={`function greet() {
  return "Hi there!";
}

greet()      // "Hi there!"`}
          />
        </Article>

        <Article title="4. Assignment expressions">
          <p>
            Yes, even assignments are expressions in JavaScript. When you do:
          </p>

          <CodeDisplay code={`let a = 2;`} />

          <p>
            The a = 2 part is an expression. In fact, it evaluates to the value
            being assigned — 2 in this case. That’s why you can chain
            assignments:
          </p>

          <CodeDisplay
            code={`let x, y;
x = y = 10;`}
          />

          <p>y = 10 evaluates to 10, and that value is then assigned to x.</p>
        </Article>

        <Article title="5. Logical expressions">
          <p>
            Expressions like true && false or a || b are logical expressions.
            They return one of the operands, not necessarily a boolean.
          </p>

          <CodeDisplay
            code={`let loggedIn = true;
let user = loggedIn && "John"; // "John"`}
          />

          <p>
            Here, loggedIn && &quot;John&quot; means: if loggedIn is truthy,
            return &quot;John&quot;. If it were falsy, JavaScript would return
            loggedIn.
          </p>
        </Article>

        <Article title="6. Conditional (ternary) expressions">
          <p>
            Another type of expression is the{" "}
            <Link
              className="font-semibold text-primary underline"
              href={"/fundamentals/conditionals"}
            >
              ternary operator:
            </Link>
            <CodeDisplay
              code={`let age = 18;
let message = age >= 18 ? "Adult" : "Minor";`}
            />
            <p>
              age &gt;= 18 ? &quot;Adult&quot; : &quot;Minor&quot; is an
              expression. It checks the condition and returns one of the two
              strings based on the result.
            </p>
          </p>
        </Article>

        <Article>
          <p>
            Understanding expressions in JavaScript is crucial because they are
            everywhere. Whether you’re assigning values, comparing things,
            calling functions, or combining strings — you’re writing
            expressions. The more you recognize them, the more control you have
            over how your code behaves and flows. Eventually, you’ll realize
            that writing expressive, elegant JavaScript is really about
            mastering how and where you use expressions.
          </p>
        </Article>
      </Chapter>
    </ProtectedRoute>
  );
}
