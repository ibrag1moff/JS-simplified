import { usePathname } from "next/navigation";

export enum AccessLevel {
  PUBLIC = "free",
  FREE_WITH_LOGIN = "free With Login",
  PAID = "paid"
}

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
          active: isNavItemActive(pathname, "/"),
          access: null
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
          active: isNavItemActive(pathname, "/fundamentals/intro"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 2,
          name: "Variables and Data Types",
          href: "/fundamentals/variables",
          active: isNavItemActive(pathname, "/fundamentals/variables"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 3,
          name: "Operators and Expressions",
          href: "/fundamentals/operators",
          active: isNavItemActive(pathname, "/fundamentals/operators"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 4,
          name: "Conditionals",
          href: "/fundamentals/conditionals",
          active: isNavItemActive(pathname, "/fundamentals/conditionals"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 5,
          name: "Loops",
          href: "/fundamentals/loops",
          active: isNavItemActive(pathname, "/fundamentals/loops"),
          access: AccessLevel.FREE_WITH_LOGIN
        },
        {
          id: 6,
          name: "Functions",
          href: "/fundamentals/functions",
          active: isNavItemActive(pathname, "/fundamentals/functions"),
          access: AccessLevel.FREE_WITH_LOGIN
        },
        {
          id: 7,
          name: "Function Expressions and Arrow Functions",
          href: "/fundamentals/function-expressions",
          active: isNavItemActive(
            pathname,
            "/fundamentals/function-expressions"
          ),
          access: AccessLevel.PUBLIC
        },
        {
          id: 8,
          name: "Arrays",
          href: "/fundamentals/arrays",
          active: isNavItemActive(pathname, "/fundamentals/arrays"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 9,
          name: "Objects",
          href: "/fundamentals/objects",
          active: isNavItemActive(pathname, "/fundamentals/objects"),
          access: AccessLevel.FREE_WITH_LOGIN
        },
        {
          id: 10,
          name: "Strings",
          href: "/fundamentals/strings",
          active: isNavItemActive(pathname, "/fundamentals/strings"),
          access: AccessLevel.PUBLIC
        }
      ]
    },
    {
      groupName: "Intermediate Concepts",
      items: [
        {
          id: 11,
          name: "Scope and Hoisting",
          href: "/intermediate/scope-hoisting",
          active: isNavItemActive(pathname, "/intermediate/scope-hoisting"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 12,
          name: "Closures",
          href: "/intermediate/closures",
          active: isNavItemActive(pathname, "/intermediate/closures"),
          access: AccessLevel.PAID
        },
        {
          id: 13,
          name: "Maps",
          href: "/intermediate/maps",
          active: isNavItemActive(pathname, "/intermediate/maps"),
          access: AccessLevel.PAID
        },
        {
          id: 14,
          name: "Sets",
          href: "/intermediate/sets",
          active: isNavItemActive(pathname, "/intermediate/sets"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 15,
          name: "Reference Behavior",
          href: "/intermediate/mutability",
          active: isNavItemActive(pathname, "/intermediate/mutability"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 16,
          name: "The 'this' Keyword",
          href: "/intermediate/this",
          active: isNavItemActive(pathname, "/intermediate/this"),
          access: AccessLevel.FREE_WITH_LOGIN
        },
        {
          id: 17,
          name: "ES6+ Features",
          href: "/intermediate/es6-features",
          active: isNavItemActive(pathname, "/intermediate/es6-features"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 18,
          name: "Destructuring",
          href: "/intermediate/destructuring",
          active: isNavItemActive(pathname, "/intermediate/destructuring"),
          access: AccessLevel.FREE_WITH_LOGIN
        }
      ]
    },
    {
      groupName: "Advanced",
      items: [
        {
          id: 19,
          name: "Asynchronous JavaScript",
          href: "/advanced/async-js",
          active: isNavItemActive(pathname, "/advanced/async-js"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 20,
          name: "Async/Await",
          href: "/advanced/async-await",
          active: isNavItemActive(pathname, "/advanced/async-await"),
          access: AccessLevel.FREE_WITH_LOGIN
        },
        {
          id: 21,
          name: "Event Loop ",
          href: "/advanced/event-loop",
          active: isNavItemActive(pathname, "/advanced/event-loop"),
          access: AccessLevel.PAID
        },
        {
          id: 22,
          name: "Proxy Objects",
          href: "/advanced/proxy",
          active: isNavItemActive(pathname, "/advanced/proxy"),
          access: AccessLevel.PAID
        },
        {
          id: 23,
          name: "Symbols",
          href: "/advanced/symbols",
          active: isNavItemActive(pathname, "/advanced/symbols"),
          access: AccessLevel.FREE_WITH_LOGIN
        },
        {
          id: 24,
          name: "Error Handling",
          href: "/advanced/error-handling",
          active: isNavItemActive(pathname, "/advanced/error-handling"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 25,
          name: "Modules",
          href: "/advanced/modules",
          active: isNavItemActive(pathname, "/advanced/modules"),
          access: AccessLevel.PUBLIC
        },
        {
          id: 26,
          name: "Classes and Prototypes",
          href: "/advanced/classes-prototypes",
          active: isNavItemActive(pathname, "/advanced/classes-prototypes"),
          access: AccessLevel.PAID
        },
        {
          id: 27,
          name: "Functional Programming Concepts",
          href: "/advanced/functional-programming",
          active: isNavItemActive(pathname, "/advanced/functional-programming"),
          access: AccessLevel.PAID
        }
      ]
    }
  ];
};
