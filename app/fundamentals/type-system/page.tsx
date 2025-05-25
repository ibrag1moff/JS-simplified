import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function TypeSystemPage() {
  return (
    <Chapter>
      <SectionTitle title="Type System" />

      <Article>
        <p>
          A type system is a set of rules that assigns a property called “type”
          to the various constructs—such as variables, functions, or
          expressions—in a programming language. These types determine what kind
          of values these constructs can hold and how they can behave when
          manipulated. The goal of a type system is to prevent bugs by ensuring
          operations are performed on compatible types.
        </p>
      </Article>

      <Article title="JavaScript’s Type System">
        <p>
          JavaScript uses a dynamic and loosely typed system. This means
          variables in JavaScript are not bound to a specific data type.
          Instead, the type of a variable is determined at runtime based on the
          value it holds. You can declare a variable and assign any value to
          it—be it a number, string, boolean, or even an object—and then
          reassign it with a different type later in the program.
        </p>

        <CodeDisplay
          code={`let value = 42;        // number
value = "hello";       // string
value = true;          // boolean`}
        />

        <p>
          This flexibility makes JavaScript very forgiving and expressive, but
          it can also lead to unexpected behavior, especially when implicit type
          coercion occurs. For example:
        </p>

        <CodeDisplay
          code={`console.log("5" - 1);   // 4 
console.log("5" + 1);   // "51"`}
        />
      </Article>

      <Article title="Static vs Dynamic Typing">
        <p>
          Languages like C, Java, and TypeScript use a static type system. In
          static typing, the type of each variable is known at compile time.
          This allows for early detection of type-related errors before the
          program even runs.
        </p>

        <CodeDisplay
          code={`int age = 25;
age = "twenty-five"; // Error`}
        />

        <p>
          Static typing provides more robustness, particularly in large
          codebases, because it gives you the ability to catch mistakes early.
          However, it requires more upfront discipline in declaring and
          maintaining types.
        </p>

        <p>
          Dynamic languages like JavaScript, Python, and Ruby, on the other
          hand, resolve types during execution. This leads to more concise code
          and faster development, at the cost of potential runtime errors.
        </p>
      </Article>

      <Article>
        <p>
          The type system of a programming language influences how you write
          code, how errors are caught, and how maintainable your projects
          become. JavaScript, with its dynamic and weak typing, allows fast
          prototyping and flexibility — but at the risk of runtime surprises. In
          contrast, static and strongly typed languages like Java or TypeScript
          enforce strict rules, offering better safety and maintainability at
          the cost of verbosity and learning curve.
        </p>

        <p>
          Understanding how JavaScript’s type system works — along with its
          quirks — is fundamental to becoming an effective JavaScript developer.
          And once you master that, you can move on to using tools like
          TypeScript to bring the best of both dynamic and static worlds
          together.
        </p>
      </Article>
    </Chapter>
  );
}
