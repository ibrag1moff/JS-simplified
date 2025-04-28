export default function Home() {
  return (
    <div className="flex flex-col gap-24 px-5">
      <h1 className="font-bold text-4xl uppercase font-sans">
        JavaScript Simplified - Intro
      </h1>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">Welcome!</h3>
        <p className="font-medium text-lg">
          Hey, thanks for stopping by! 👋 This book will help you{" "}
          <span>understand</span> and <span>master</span> JavaScript in a{" "}
          <span>simplified way</span>. It is designed for beginners and
          experienced developers alike. The goal is to provide a clear and
          concise explanation of <span>JavaScript concepts</span>, so you can
          <span> learn</span> and apply them in your projects.
        </p>
      </div>

      <p className="font-medium text-lg">
        After helping hundreds of students learn JavaScript, I noticed the same
        <span> patterns</span> of confusion and common obstacles repeating
        themselves. Concepts like closures, <span>asynchronous behavior</span>,
        the event loop, and deep copy vs shallow copy often created roadblocks
        that slowed down real progress. This guide is the{" "}
        <span> collection of solutions</span> I wish I had when I started — a
        clear, practical path through the most important JavaScript concepts
        without unnecessary theory or overwhelming jargon. It’s built to help
        you not just memorize, but <span>understand</span> how and why
        JavaScript works the way it does — so you can write{" "}
        <span>better code</span>, debug faster, and grow with confidence as a
        developer. Whether you’re just starting out, preparing for interviews,
        or strengthening your <span>core skills</span>, this guide aims to be
        your trusted companion along the way.
      </p>

      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">Additional Notes</h3>
        <p className="font-medium text-lg">
          This book is much more than just a simple overview of common
          <span> JavaScript ideas.</span> While it touches on some well-known
          topics, it introduces <span>many concepts</span> that are far more
          relevant for
          <span> modern development.</span>
          <br />
          <br />
          The goal was to create a single resource that gathers the most
          valuable lessons learned from <span>years</span> of real-world
          JavaScript experience. It’s designed to serve both as a quick
          reference and a<span> structured guide.</span> While you can jump
          around and use it as a cheatsheet, reading it in order is highly
          recommended, since many concepts build upon one another to form a
          deeper understanding. <br />
          <br /> Clear explanations, diagrams, and code examples in multiple
          styles are included throughout, along with detailed{" "}
          <span>clarifications</span> on concepts that are often misunderstood
          or confused because of similar terminology.
        </p>

        <h3 className="font-medium">Good luck!</h3>
      </div>
    </div>
  );
}
