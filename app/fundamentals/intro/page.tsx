import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function IntroPage() {
  return (
    <div className="flex flex-col gap-24 px-5">
      <SectionTitle title="Introduction to JavaScript" />

      <p>
        JavaScript is a <span>dynamically typed</span>, interpreted programming
        <span> language</span> primarily used to create{" "}
        <span> interactive</span> and <span> dynamic </span>
        content on websites. It runs <span>directly in the browser</span>,
        enabling websites to go beyond static content and include actions like
        clicking buttons, updating information, validating forms, and creating
        animations.
        <span> JavaScript </span> is an essential part of the web development
        stack, alongside HTML (for structure) and CSS (for styling), and it is
        widely used for both frontend and backend development.
      </p>

      <div className="flex flex-col gap-4">
        <h3>What is dynamically typed language?</h3>

        <p>
          JavaScript is <span>dynamically typed</span>, meaning variable types
          are determined at <span>runtime</span>. You don’t need to specify
          whether a variable is a number, string, or another type when you
          <span> declare</span> it. This makes the language
          <span> more flexible</span>, but it also means you have to be more
          careful with data types during development.
        </p>

        <CodeDisplay
          code={`let message = "Hello, world!";  // message is a string
message = 42;  // now message is a number`}
        />

        <p>
          This flexibility can make coding <span>faster</span>, but also
          introduces <span>potential errors</span> when types are misused.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Interpreted Languages</h3>
        <p>
          JavaScript is also an <span>interpreted language</span>, meaning that
          the code is executed <span> line-by-line</span> by the browser’s
          JavaScript engine (like V8 in Chrome). Unlike{" "}
          <span>compiled languages</span>, where the code is first transformed
          into machine code before execution, interpreted languages are executed
          <span> directly</span> without a separate compilation step. This leads
          to faster testing and iteration, though it can result in slower
          execution compared to compiled languages.
        </p>

        <p>
          In summary, <span>JavaScript</span> is both dynamically typed (types
          are assigned during runtime) and interpreted (executed directly by an
          interpreter), making it a flexible and efficient language for web
          development, but one that <span>requires</span> careful management of
          types and performance considerations.
        </p>
      </div>
    </div>
  );
}
