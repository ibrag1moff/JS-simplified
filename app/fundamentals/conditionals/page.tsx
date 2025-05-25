import SectionTitle from "@/widgets/SectionTitle";
import CodeDisplay from "@/widgets/CodeDisplay";
import Article from "@/components/Article";
import Chapter from "@/components/Chapter";

export default function ControlFlowPage() {
  return (
    <Chapter>
      <SectionTitle title="Conditionals" />

      <Article>
        <p>
          When writing programs, we often need to make decisions. A user might
          be logged in or not, a number might be positive or negative, a value
          might match a certain condition — and we need to react accordingly. In
          JavaScript, this ability to make decisions is powered by conditional
          statements.
        </p>

        <p>
          Conditional logic allows your code to follow different paths based on
          specific criteria. In this chapter, we’ll explore how JavaScript lets
          us express conditions using if, else if, and else statements, as well
          as the switch statement and the ternary operator.
        </p>
      </Article>

      <Article title="If statement">
        <CodeDisplay
          code={`let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}`}
        />

        <p>
          👉 If the condition age &gt;= 18 is true, the code inside the {} block
          will run.
        </p>
      </Article>

      <Article title="If...else statement">
        <CodeDisplay
          code={`let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}`}
        />

        <p>👉 The else block runs if the if condition is false.</p>
      </Article>

      <Article title="Else...if Else...if">
        <CodeDisplay
          code={`let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}`}
        />
        <p>👉 This lets you check multiple conditions in order.</p>
      </Article>

      <Article title="Switch statement">
        <p>Used when you have many possible values for a variable.</p>
        <CodeDisplay
          code={`let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Another day");
}`}
        />
        <p>
          👉 break is important – it stops the execution from going to the next
          case.
        </p>
      </Article>

      <Article title="Ternary operator">
        <p>
          JavaScript also has a concise way to write simple conditional
          expressions: the ternary operator. It’s called “ternary” because it
          involves three parts:
        </p>

        <CodeDisplay
          code={`condition ? expressionIfTrue : expressionIfFalse`}
        />

        <p>Let’s look at an example:</p>

        <CodeDisplay
          code={`let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);  // Yes`}
        />

        <p>
          The ternary operator evaluates the condition (age &gt;= 18). If it’s
          true, it returns “Yes”; otherwise, it returns “No”. It’s best used for
          short, simple decisions — for more complex logic, if/else is clearer.
        </p>

        <p>You can also use ternaries inside other expressions:</p>

        <CodeDisplay
          code={`console.log(isLoggedIn ? "Dashboard" : "Login page");`}
        />
      </Article>

      <Article>
        <p>
          Conditional logic is at the heart of interactive, responsive programs.
          Whether you’re writing a login system, calculating discounts, or
          handling user input, you’ll use if, else if, else, switch, and ternary
          expressions to control your application’s behavior.
        </p>
      </Article>
    </Chapter>
  );
}
