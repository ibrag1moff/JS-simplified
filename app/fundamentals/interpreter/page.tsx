import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import ProtectedRoute from "@/components/ProtectedRoute";
import SectionTitle from "@/widgets/SectionTitle";

export default function InterpreterPage() {
  return (
    <ProtectedRoute>
      <Chapter>
        <SectionTitle title="The JS Interpreter" />

        <Article>
          <p>
            When you write JavaScript code, it doesn’t run by magic. Behind the
            scenes, there’s a powerful engine reading your code, understanding
            it line by line, and executing it. This engine is called the
            JavaScript interpreter. Understanding what it does — and how — is a
            key part of becoming a better JavaScript developer.
          </p>
        </Article>

        <Article title="What is a JavaScript Interpreter?">
          <p>
            A JavaScript interpreter is a program that reads your JavaScript
            code and executes it line by line, without needing to compile it
            into machine code first. This makes JavaScript fast to run in many
            environments, especially in browsers.
          </p>

          <p>
            In simpler terms, the interpreter is the “reader” and “executor” of
            your code.
          </p>
        </Article>

        <Article title="How Does It Work?">
          <p>
            When your browser (like Chrome, Firefox, or Safari) loads a web page
            with JavaScript, it passes the JavaScript code to its built-in
            engine. For example:
          </p>

          <ul>
            <li>Chrome uses V8</li>
            <li>Firefox uses SpiderMonkey</li>
            <li>Safari uses JavaScriptCore (also called Nitro)</li>
          </ul>

          <p>
            These engines interpret JavaScript — but they’re more than just
            interpreters now. Modern engines combine interpretation with
            compilation for better performance, using something called
            Just-In-Time (JIT) Compilation.
          </p>
        </Article>

        <Article>
          <p>Let’s say you write the following code in your browser console:</p>

          <CodeDisplay
            code={`let x = 5;
let y = 10;
let result = x + y;
console.log(result);`}
          />

          <p>Here’s what the interpreter does step by step:</p>
          <ul>
            <li>
              It sees let x = 5 and allocates memory for x with the value 5.
            </li>
            <li>It does the same for y.</li>
            <li>It calculates x + y, stores the result in result.</li>
            <li>It calls console.log(result) and prints 15 to the screen.</li>
          </ul>

          <p>
            All of this happens in real-time — the interpreter doesn’t wait to
            compile the whole program first.
          </p>
        </Article>

        <Article title="Why Is JavaScript Called an Interpreted Language?">
          <p>
            Because you can run JavaScript without compiling it beforehand. You
            can open your browser’s developer tools, type some code, and run it
            instantly.
          </p>

          <p>
            Compare that to languages like C or Java, which require you to
            compile your code before it can be executed. In JavaScript, the
            interpreter lets you write and test your code interactively, which
            is a huge advantage for rapid development.
          </p>
        </Article>

        <Article>
          <p>
            The JavaScript interpreter is what makes your code come alive.
            Whether you’re clicking a button on a webpage, running a script on a
            server, or building a mobile app — there’s an engine under the hood
            interpreting your code.
          </p>

          <p>
            Understanding this interpreter not only helps you write better
            JavaScript, but also helps you debug, optimize, and structure your
            programs more intelligently. It’s the invisible engine that powers
            nearly every interactive website today.
          </p>
        </Article>
      </Chapter>
    </ProtectedRoute>
  );
}
