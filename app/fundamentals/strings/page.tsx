import Article from "@/components/Article";
import Chapter from "@/components/Chapter";
import CodeDisplay from "@/widgets/CodeDisplay";
import SectionTitle from "@/widgets/SectionTitle";

export default function StringsPage() {
  return (
    <Chapter>
      <SectionTitle title="Strings" />

      <Article>
        <p>
          In JavaScript, a string is one of the most fundamental data types. It
          represents textual data — anything enclosed within quotes is a string.
          Strings are used to store names, messages, file paths, HTML, and much
          more. Whether you’re writing a website title or sending an API
          request, you’ll be working with strings all the time.
        </p>
      </Article>

      <Article title="What is a String?">
        <p>
          {" "}
          String is a sequence of characters used to represent text. Each
          character has its own index and you can access it with dot notation.
        </p>

        <CodeDisplay
          code={`const message = "Hello world";
console.log(message[0]) // H`}
        />
      </Article>

      <Article>
        <p>You can define strings with single or double quotes:</p>

        <CodeDisplay
          code={`const message = 'Hello world';
const name = "Alice";`}
        />
      </Article>

      <Article title="Template Literals">
        <p>
          Template literals, written with backticks (``), make working with
          strings more powerful. You can include variables or expressions inside
          a string using $ and curly braces.
        </p>

        <CodeDisplay
          code={`\
const name = "Alice";
const greeting = \`Hello, \${name}!\`;
console.log(greeting);
\``}
        />

        <p>
          This feature makes it much easier to build dynamic strings compared to
          traditional concatenation.
        </p>
      </Article>

      <Article title="Strings Are Immutable">
        <p>
          An important concept to remember is that strings in JavaScript are
          immutable. That means once a string is created, it cannot be changed.
          Any operation that seems to “modify” a string actually creates a new
          one.
        </p>

        <CodeDisplay
          code={`let message = "Hello";
message[0] = "h";
console.log(message); // "Hello"`}
        />

        <p>If you want to change a string, you must create a new one:</p>

        <CodeDisplay
          code={`message = "h" + message.slice(1);
console.log(message); // "hello"`}
        />
      </Article>

      <Article title="String Methods">
        <p>
          JavaScript provides a rich set of built-in methods to work with
          strings. These methods allow you to search, manipulate, and transform
          strings easily.
        </p>

        <p>Let’s walk through some of the most commonly used ones.</p>
      </Article>

      <Article title="1. length">
        <p>
          The .length property tells you how many characters are in the string.
        </p>

        <CodeDisplay code={`"hello".length;`} />
      </Article>

      <Article title="2. toUpperCase() / toLowerCase()">
        <p>Changes all characters to uppercase/lowercase.</p>

        <CodeDisplay
          code={`"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"`}
        />
      </Article>

      <Article title="3. charAt(index)">
        <p>Returns the character at a given index.</p>

        <CodeDisplay code={`"hello".charAt(1); // "e"`} />
      </Article>

      <Article title="4. indexOf(substring) / lastIndexOf(substring)">
        <p>Finds the index of a substring (first or last occurrence).</p>

        <CodeDisplay
          code={`"banana".indexOf("a"); // 1
"banana".lastIndexOf("a"); // 5`}
        />
      </Article>

      <Article title="5. includes(substring)">
        <p>
          Checks if the string contains the given substring. Returns a boolean.
        </p>

        <CodeDisplay code={`"javascript".includes("script"); // true`} />
      </Article>

      <Article title="6. startsWith(substring) / endsWith(substring)">
        <p>
          Checks if the string starts or ends with the given substring. Returns
          a boolean.
        </p>

        <CodeDisplay
          code={`"hello".startsWith("he"); // true
"hello".endsWith("lo");   // true`}
        />
      </Article>

      <Article title="7. slice(start, end)">
        <p>Extracts part of a string from start to end (not inclusive).</p>

        <CodeDisplay code={`"hello".slice(1, 4); // "ell"`} />
      </Article>

      <Article title="8. replace(search, replacement)">
        <p>Replaces the first occurrence of a substring.</p>

        <CodeDisplay
          code={`"I love cats".replace("cats", "dogs"); // "I love dogs"`}
        />

        <p>Use /cats/g (a regex with global flag) to replace all.</p>
      </Article>

      <Article title="9. trim()">
        <p>Removes whitespace from both ends.</p>

        <CodeDisplay code={`"  hello  ".trim(); // "hello"`} />
      </Article>

      <Article title="10. split(separator)">
        <p>
          Splits the string into an array. Takes a separator which tells where
          element in array will end.
        </p>

        <CodeDisplay
          code={`"apple,banana,orange".split(","); 
// ["apple", "banana", "orange"]`}
        />
      </Article>

      <Article title="11. repeat(n)">
        <p>Repeats the string n times.</p>

        <CodeDisplay code={`"ha".repeat(3); // "hahaha"`} />
      </Article>

      <Article title="12. concat()">
        <p>
          Concatenates two or more strings. Concatenation in JavaScript means
          joining things together
        </p>

        <CodeDisplay code={`"Hello".concat(" ", "World"); // "Hello World"`} />

        <p>But usually we use + operator:</p>

        <CodeDisplay code={`"Hello" + " World";`} />
      </Article>

      <Article>
        <p>
          Strings are everywhere in JavaScript — from UI text to server
          communication. While strings are immutable, JavaScript gives you
          dozens of methods to manipulate them, extract data, check content, and
          construct new ones.
        </p>

        <p>
          As you write more programs, you’ll find yourself using strings
          constantly: logging messages, working with user input, formatting
          dates, creating HTML — all involve strings. Becoming comfortable with
          string methods will make your code more expressive, efficient, and
          robust.
        </p>
      </Article>
    </Chapter>
  );
}
