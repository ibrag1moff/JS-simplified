import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";
import Article from "@/components/Article";
import CodeDisplay from "@/widgets/CodeDisplay";

export default function Loops() {
  return (
    <Chapter>
      <SectionTitle title={"Loops in JavaScript"} />

      <Article>
        <h3>
          “Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.”
        </h3>
        <p className={"ml-auto"}>- Martin Fowler</p>
      </Article>

      <Article>
        <p>
          Loops are one of the most <span>fundamental</span> constructs in
          programming. They allow developers to <span>execute</span> a block of
          code <span>repeatedly,</span> saving time, <span> reducing</span>{" "}
          redundancy, and enhancing flexibility.
        </p>

        <p>
          Imagine you’re asked to print numbers <span>from</span> 1{" "}
          <span>to</span> 100. Would you really write:
        </p>

        <CodeDisplay
          code={`
console.log(1);
console.log(2);
// ...
console.log(100);
        `}
        />

        <p>Of course not.</p>

        <p>
          Instead, you’d use a <span>loop,</span> and with just a few{" "}
          <span>lines</span> of code, <span>achieve</span> the same result — in
          a clean, elegant, and scalable way.
        </p>

        <p className={"mt-4"}>
          In this chapter, we <span>explore</span> the two most{" "}
          <span>commonly</span> used loops in JavaScript:
        </p>

        <ul>
          <li>For</li>
          <li>While</li>
        </ul>

        <p>
          Along the way, we’ll <span>uncover</span> real-world examples, common
          pitfalls, and even how to <span>write</span> loops that senior
          <span>engineers</span> would admire.
        </p>
      </Article>
    </Chapter>
  );
}
