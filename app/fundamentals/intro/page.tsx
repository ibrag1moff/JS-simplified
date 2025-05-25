import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function IntroPage() {
  return (
    <Chapter>
      <SectionTitle title="Introduction to JavaScript" />

      <Article>
        <p>
          JavaScript is a high-level, interpreted programming language primarily
          used for adding interactivity and dynamic behavior to web pages. It
          was created in just 10 days in 1995 by Brendan Eich and was initially
          intended to be a lightweight scripting language for browsers. Over
          time, it has evolved into a powerful, full-featured language that now
          powers both frontend and backend development.
        </p>

        <p>
          Unlike HTML and CSS, which are used to structure and style web
          content, JavaScript controls the logic and behavior. It allows you to
          respond to user events like clicks or keystrokes, manipulate the
          page’s content, fetch data from servers, and even build entire
          applications in the browser.
        </p>
      </Article>

      <Article>
        <p>
          One of JavaScript’s core characteristics is that it is dynamically
          typed. This means you don’t need to declare variable types explicitly.
          The JavaScript engine figures out the type of the value at runtime.
        </p>

        <CodeDisplay
          code={`let message = "Hello, world!";  // message is a string
message = 42;  // now message is a number`}
        />

        <p>
          This flexibility can make coding faster, but also introduces potential
          errorswhen types are misused.
        </p>
      </Article>

      <Article title="Interpreted Languages">
        <p>
          JavaScript is also an interpreted language. Unlike compiled languages
          like C++ or Java, where the code is translated to machine language
          before running, JavaScript is executed directly by the JavaScript
          engine (like V8 in Chrome or SpiderMonkey in Firefox) line-by-line.
          This allows for rapid development, immediate feedback, and easier
          debugging.
        </p>
      </Article>

      <Article title="JavaScript Environment">
        <p>
          JavaScript can run in multiple environments, but the most common are
          the browser and Node.js.
        </p>
        <p>
          In the browser, JavaScript runs inside a webpage and interacts with
          the Document Object Model (DOM). It listens for user events, updates
          the UI, and communicates with external APIs. Here’s a simple example
          of using the fetch API to retrieve data from an external service:
        </p>
        <CodeDisplay
          code={`fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("Received data:", data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });`}
        />
        <p>
          When run in the browser, this code will request data from a server and
          log it to the console. No page reload is required.
        </p>
        <p>
          On the server side, JavaScript can run in Node.js, an environment that
          allows you to write backend logic using JavaScript. With Node.js, you
          can access the file system, create web servers, work with databases,
          and much more.
        </p>

        <p>Here’s a simple example of creating a server using Node.js:</p>

        <CodeDisplay
          code={`const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});`}
        />

        <p>
          This code creates a basic HTTP server that sends a plain text response
          when accessed in a browser.
        </p>

        <p>
          Whether you’re building a website interface or a backend API,
          JavaScript can handle both with ease. This ability to work on both
          sides of a web application is one of the reasons JavaScript has become
          a favorite among full-stack developers.
        </p>
      </Article>

      <Article>
        <p>
          JavaScript is more than just a scripting language for adding popups
          and alerts to websites. It has grown into a full-fledged programming
          language capable of building complex, scalable applications. As a
          dynamically typed and interpreted language, JavaScript offers
          flexibility and ease of use—great for beginners and powerful for
          experienced developers.
        </p>
      </Article>
    </Chapter>
  );
}
