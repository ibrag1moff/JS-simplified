import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import SectionTitle from "@/widgets/SectionTitle";

export default function Home() {
  return (
    <Chapter>
      <SectionTitle title="JavaScript Simplified - Intro" />

      <Article title="Welcome!">
        <p>
          Hey, thanks for stopping by! 👋 This book will help you understand and
          master JavaScript in a simplified way. It is designed for beginners
          and experienced developers alike. The goal is to provide a clear and
          concise explanation of JavaScript concepts, so you can learn and apply
          them in your projects.
        </p>
      </Article>

      <Article>
        <p>
          After helping hundreds of students learn JavaScript, I noticed the
          same patterns of confusion and common obstacles repeating themselves.
          Concepts like closures, asynchronous behavior , the event loop, and
          deep copy vs shallow copy often created roadblocks that slowed down
          real progress. This guide is the collection of solutions I wish I had
          when I started — a clear, practical path through the most important
          JavaScript concepts without unnecessary theory or overwhelming jargon.
          It’s built to help you not just memorize, but understand how and why
          JavaScript works the way it does — so you can write better code, debug
          faster, and grow with confidence as a developer. Whether you’re just
          starting out, preparing for interviews, or strengthening your core
          skills, this guide aims to be your trusted companion along the way.
        </p>
      </Article>

      <Article title="Additional Notes">
        <p>
          This book is much more than just a simple overview of common
          JavaScript ideas. While it touches on some well-known topics, it
          introduces many concepts that are far more relevant for modern
          development.
          <br />
          <br />
          The goal was to create a single resource that gathers the most
          valuable lessons learned from years of real-world JavaScript
          experience. It’s designed to serve both as a quick reference and a
          structured guide. While you can jump around and use it as a
          cheatsheet, reading it in order is highly recommended, since many
          concepts build upon one another to form a deeper understanding. <br />
          <br /> Clear explanations, diagrams, and code examples in multiple
          styles are included throughout, along with detailed clarifications on
          concepts that are often misunderstood or confused because of similar
          terminology.
        </p>

        <h3 className="font-medium !text-md">Good luck!</h3>
      </Article>
    </Chapter>
  );
}
