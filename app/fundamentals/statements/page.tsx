import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import ProtectedRoute from "@/components/ProtectedRoute";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function StatementsPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title="Statements" />

        <Article>
          Every line of code you write in JavaScript is either an expression or
          a statement, and understanding the difference between them is key to
          reading and writing logical, structured programs. In this chapter,
          we’ll focus on statements — the core building blocks of any JavaScript
          application.
        </Article>

        <Article title="What Is a Statement?">
          <p>
            A statement in JavaScript is an instruction that performs an action.
            It tells the JavaScript engine what to do. For example, you can
            declare a variable, make a decision, repeat something, or call a
            function — all of these are different kinds of statements.
          </p>

          <p>
            Statements are executed one after another, in the order they appear
            (unless control flow changes that order using conditionals, loops,
            or functions).
          </p>

          <CodeDisplay
            code={`let name = "Alice";     
console.log(name);`}
          />

          <p>
            Each line ends in a semicolon (;) — this tells the JavaScript engine
            that the instruction is complete. While semicolons are technically
            optional in many cases, it’s considered good practice to use them
            for clarity and consistency.
          </p>
        </Article>

        <Article title="Expressions vs. Statements">
          <p>
            To really grasp statements, you need to understand what an
            expression is. An expression is any piece of code that produces a
            value. For example:
          </p>

          <CodeDisplay
            code={`2 + 2           // → 4
"Hello" + "!"   // → "Hello!"
true && false   // → false`}
          />

          <p>
            These don’t do anything by themselves — they just compute values.
          </p>

          <p>
            But when you take an expression and place it where JavaScript
            expects a statement, such as a line on its own, it becomes what we
            call an expression statement.
          </p>
        </Article>

        <Article title="Expression Statements">
          <p>
            An expression statement is simply an expression used as a statement.
            It doesn’t just sit there — it gets evaluated when the program runs.
            Let’s look at some examples:
          </p>

          <CodeDisplay code={`x = 5 + 3;`} />

          <p>
            This line assigns the result of 5 + 3 to x. It’s an assignment
            expression, but used as a statement — so we call it an expression
            statement. Another example:
          </p>

          <CodeDisplay code={`sayHello();`} />

          <p>
            Here, sayHello() is a function call expression. But because it’s
            written as a full line in the script — it becomes an expression
            statement that tells the engine to run the function.
          </p>

          <p>
            Even a single value can be used as an expression statement, though
            it’s not common:
          </p>

          <CodeDisplay code={`"Hello";`} />

          <p>
            This is a string expression, and since it’s on its own, it
            technically forms an expression statement. It will run, but it
            doesn’t affect the program unless it’s part of something useful
            (like console.log(&quot;Hello&quot;)).
          </p>
        </Article>

        <Article>
          <p>
            In JavaScript, statements do things. They change the program’s
            state, control the flow, or execute code. Expressions compute
            things, and when expressions are used where JavaScript expects a
            statement, they become expression statements.
          </p>

          <p>
            Most of the code you’ll write — from assigning variables to calling
            functions — involves expression statements. Understanding this
            concept helps you write cleaner, more purposeful JavaScript that
            does exactly what you intend.
          </p>
        </Article>
      </Chapter>
    </ProtectedRoute>
  );
}
