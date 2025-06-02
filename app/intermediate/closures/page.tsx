import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import PaidRoute from "@/components/PaidRoute";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function ClosuresPage() {
  return (
    <PaidRoute>
      <Chapter>
        <SectionTitle title="Closures" />

        <Article>
          <p>
            Closures are one of the most powerful — and sometimes confusing —
            concepts in JavaScript. Understanding closures will give you deeper
            control over your code, unlock new patterns like data encapsulation,
            and help you write more efficient and modular programs.
          </p>
        </Article>

        <Article title="What is a Closure?">
          <p>
            In simple terms, a closure is a function that remembers the
            variables from its lexical scope, even when the function is executed
            outside that scope.
          </p>

          <p>
            Long story short it is when you define a function inside another
            function, the inner function can access variables of the outer
            function even after the outer function has finished execution.
          </p>

          <CodeDisplay
            code={`function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3`}
          />

          <p>What’s happening?</p>
          <ul>
            <li className="font-medium">
              outer() is called → it defines count and returns inner.
            </li>
            <li className="font-medium">
              counter holds the reference to inner, which remembers count.
            </li>
            <li className="font-medium">
              Even though outer() has finished, count is still accessible
              because inner closes over count.
            </li>
          </ul>
        </Article>

        <Article>
          <p>
            Imagine outer() is a backpack. You put a sandwich (count) inside the
            backpack. Now, you hand the backpack to someone (the inner()
            function). Even after you’re gone (outer() finishes), that person
            can still access what’s inside the backpack (closure retains the
            variable).
          </p>

          <h3 className="text-primary">Closures Preserve State</h3>
          <p>Let’s build a custom counter using closures:</p>
          <CodeDisplay
            code={`function createCounter(start = 0) {
  let count = start;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = start;
      return count;
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.reset());     // 5`}
          />

          <p>
            Here, count is private to the returned object — a great use of
            closure to create encapsulation.
          </p>
        </Article>

        <Article>
          <p>
            Closures are one of the most powerful and essential concepts in
            JavaScript. They allow inner functions to access variables from
            their outer function’s scope even after the outer function has
            returned. This ability enables developers to write more modular,
            encapsulated, and flexible code.
          </p>

          <p>
            Whether you’re creating private variables, building function
            factories, managing asynchronous behavior, or implementing advanced
            patterns like currying or memoization — closures make it all
            possible.
          </p>

          <p>
            Understanding closures not only helps you write cleaner and more
            efficient code but also prepares you for more advanced topics in
            JavaScript and functional programming. Mastering them is a key step
            toward becoming a strong JavaScript developer.
          </p>
        </Article>
      </Chapter>
    </PaidRoute>
  );
}
