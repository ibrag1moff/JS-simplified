import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, href: string) {
    return pathname === href;
  }

  return [
    {
      groupName: "Introduction",
      items: [
        {
          id: 0,
          name: "Welcome to JavaScript Simplified",
          href: "/",
          active: isNavItemActive(pathname, "/")
        }
      ]
    },
    {
      groupName: "Fundamentals",
      items: [
        {
          id: 1,
          name: "Introduction to JavaScript",
          href: "/fundamentals/intro",
          active: isNavItemActive(pathname, "/fundamentals/intro")
        },
        {
          id: 2,
          name: "Variables and Data Types",
          href: "/fundamentals/variables",
          active: isNavItemActive(pathname, "/fundamentals/variables")
        },
        {
          id: 3,
          name: "Operators and Expressions",
          href: "/fundamentals/operators",
          active: isNavItemActive(pathname, "/fundamentals/operators")
        },
        {
          id: 4,
          name: "Control Flow (if, switch)",
          href: "/fundamentals/control-flow",
          active: isNavItemActive(pathname, "/fundamentals/control-flow")
        },
        {
          id: 5,
          name: "Loops (for, while)",
          href: "/fundamentals/loops",
          active: isNavItemActive(pathname, "/fundamentals/loops")
        },
        {
          id: 6,
          name: "Functions",
          href: "/fundamentals/functions",
          active: isNavItemActive(pathname, "/fundamentals/functions")
        },
        {
          id: 7,
          name: "Function Expressions and Arrow Functions",
          href: "/fundamentals/function-expressions",
          active: isNavItemActive(
            pathname,
            "/fundamentals/function-expressions"
          )
        },
        {
          id: 8,
          name: "Arrays and Array Methods",
          href: "/fundamentals/arrays",
          active: isNavItemActive(pathname, "/fundamentals/arrays")
        },
        {
          id: 9,
          name: "Objects",
          href: "/fundamentals/objects",
          active: isNavItemActive(pathname, "/fundamentals/objects")
        }
      ]
    },
    {
      groupName: "Intermediate Concepts",
      items: [
        {
          id: 10,
          name: "Scope and Hoisting",
          href: "/intermediate/scope-hoisting",
          active: isNavItemActive(pathname, "/intermediate/scope-hoisting")
        },
        {
          id: 11,
          name: "Closures",
          href: "/intermediate/closures",
          active: isNavItemActive(pathname, "/intermediate/closures")
        },
        {
          id: 12,
          name: "Maps",
          href: "/intermediate/maps",
          active: isNavItemActive(pathname, "/intermediate/maps")
        },
        {
          id: 13,
          name: "Mutability and Reference Behavior in JavaScript",
          href: "/intermediate/mutability",
          active: isNavItemActive(pathname, "/intermediate/mutability")
        },
        {
          id: 14,
          name: "The 'this' Keyword",
          href: "/intermediate/this",
          active: isNavItemActive(pathname, "/intermediate/this")
        },
        {
          id: 15,
          name: "ES6+ Features (let, const, arrow functions)",
          href: "/intermediate/es6-features",
          active: isNavItemActive(pathname, "/intermediate/es6-features")
        },
        {
          id: 16,
          name: "Destructuring and Spread/Rest",
          href: "/intermediate/destructuring",
          active: isNavItemActive(pathname, "/intermediate/destructuring")
        },
        {
          id: 17,
          name: "Template Literals",
          href: "/intermediate/template-literals",
          active: isNavItemActive(pathname, "/intermediate/template-literals")
        }
      ]
    },
    {
      groupName: "Advanced",
      items: [
        {
          id: 18,
          name: "Asynchronous JavaScript (Callbacks, Promises)",
          href: "/advanced/async-js",
          active: isNavItemActive(pathname, "/advanced/async-js")
        },
        {
          id: 19,
          name: "Async/Await",
          href: "/advanced/async-await",
          active: isNavItemActive(pathname, "/advanced/async-await")
        },
        {
          id: 20,
          name: "Event Loop and Concurrency",
          href: "/advanced/event-loop",
          active: isNavItemActive(pathname, "/advanced/event-loop")
        },
        {
          id: 21,
          name: "Proxy Objects",
          href: "/advanced/proxy",
          active: isNavItemActive(pathname, "/advanced/proxy")
        },
        {
          id: 22,
          name: "Symbols",
          href: "/advanced/symbols",
          active: isNavItemActive(pathname, "/advanced/symbols")
        },
        {
          id: 23,
          name: "Error Handling (try...catch)",
          href: "/advanced/error-handling",
          active: isNavItemActive(pathname, "/advanced/error-handling")
        },
        {
          id: 24,
          name: "Modules (import/export)",
          href: "/advanced/modules",
          active: isNavItemActive(pathname, "/advanced/modules")
        },
        {
          id: 25,
          name: "Classes and Prototypes",
          href: "/advanced/classes-prototypes",
          active: isNavItemActive(pathname, "/advanced/classes-prototypes")
        },
        {
          id: 26,
          name: "Functional Programming Concepts",
          href: "/advanced/functional-programming",
          active: isNavItemActive(pathname, "/advanced/functional-programming")
        }
      ]
    }
  ];
};
