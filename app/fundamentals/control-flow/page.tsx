import SectionTitle from "@/widgets/SectionTitle";
import CodeDisplay from "@/widgets/CodeDisplay";
import Article from "@/components/Article";

export default function ControlFlowPage() {
  return (
    <div className="flex flex-col gap-24 px-5">
      <SectionTitle title="control flow" />

      <div className="flex flex-col gap-4">
        <p>
          Control Flow is the <span>order</span> in which the computer{" "}
          <span>executes </span>
          statements in a script.
        </p>

        <p>
          Think of a story: It usually starts at the <span>beginning, </span>
          goes through the <span>middle,</span> and ends at the{" "}
          <span>last</span> page. Similarly, a program in{" "}
          <span>JavaScript</span> is executed from top to bottom, one line at a
          time. But just like a story can have plot twists and{" "}
          <span>decisions,</span>
          JavaScript can <span>change</span> the order of execution using
          <span>control flow</span> statements.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          JavaScript provides <span>several </span> control flow statements to
          make decisions, repeat actions, and jump to <span>different </span>{" "}
          parts of your code. The main <span>categories </span> are:
        </p>

        <ul>
          <li>Conditional statements – Make decisions.</li>
          <li>Loops – Repeat actions.</li>
          <li>Jump statements – Break out or skip parts of code.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h3> 🧐 Conditional Statements (Decisions)</h3>

        <p>
          These <span>allow </span> your program to make <span>decisions </span>{" "}
          based on conditions.
        </p>

        <h3 className="mt-2">If statement</h3>
        <CodeDisplay
          code={`
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}  
        `}
        />

        <p>
          👉 If the condition <span>age &gt;= 18</span> is true, the code inside
          the {} block will run.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>If...else statement</h3>
        <CodeDisplay
          code={`
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
`}
        />

        <p>
          👉 The <span>else</span> block runs if the if condition is{" "}
          <span>false.</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>If...else if...else</h3>
        <CodeDisplay
          code={`
let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
`}
        />
        <p>
          👉 This lets you check <span>multiple</span> conditions in order.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Switch statement</h3>
        <p>
          Used when you have <span>many</span> possible <span>values</span> for
          a variable.
        </p>
        <CodeDisplay
          code={`
let day = "Monday";

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
}
        `}
        />
        <p>
          👉 break is important – it stops the execution from going to the next
          case.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3> 🔁 Loops (Repetition)</h3>
        <p>
          Loops let you repeat code <span>multiple</span> times.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>For loop</h3>
        <CodeDisplay
          code={`
for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}
`}
        />

        <p>Explanation:</p>

        <ul>
          <li> i = 0: starting point.</li>
          <li> i &lt; 5: condition to keep looping.</li>
          <li> i++: increase i by 1 each loop. </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h3> While loop</h3>
        <CodeDisplay
          code={`
let i = 0;

while (i < 5) {
  console.log("Counting:", i);
  i++;
}
`}
        />

        <p>
          Use this when you <span>don’t</span> know how many times the loop
          should <span>run</span> in advance.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Do...while loop</h3>

        <CodeDisplay
          code={`
let i = 0;

do {
  console.log("Run at least once:", i);
  i++;
} while (i < 5);
     `}
        />

        <p>
          This loop <span>runs at least once,</span> even if the condition is
          false the first time.
        </p>
      </div>

      <Article title={"⛔ Jump Statements"}>
        <h3>Break</h3>
        <p>
          Stops the <span>current</span> loop or switch.
        </p>

        <CodeDisplay
          code={`
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
        `}
        />

        <p className="mb-4">
          <span>Stops</span> printing when i is 5.
        </p>

        <h3>Continue</h3>

        <p>
          Skips the <span>current</span> loop iteration.
        </p>

        <CodeDisplay
          code={`
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
        `}
        />

        <p className="mb-4">
          Prints all numbers <span>except</span> 2.
        </p>
      </Article>

      <Article title={"✨ Real Example"}>
        <p>
          Let’s say you are <span>checking</span> the number of apples:
        </p>

        <CodeDisplay
          code={`
let apples = 3;

if (apples > 0) {
  console.log("You have apples!");
} else {
  console.log("No apples.");
}
          `}
        />

        <p>
          Then, maybe you want to <span>count</span> how many apples you eat:
        </p>

        <CodeDisplay
          code={`
while (apples > 0) {
  console.log("Eating an apple...");
  apples--;
}
          `}
        />

        <p>Finally: </p>

        <CodeDisplay
          code={`
console.log("No more apples!");
        `}
        />
      </Article>

      <Article>
        <p>
          Control flow is the foundation of programming logic — it decides what
          happens, when it happens, and how often it happens in your JavaScript
          programs.
        </p>
      </Article>
    </div>
  );
}
