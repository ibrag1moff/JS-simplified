export enum AccessLevel {
  PUBLIC = "free",
  FREE_WITH_LOGIN = "free with login",
  PAID = "paid"
}

export type NavItemConfig = {
  id: number;
  name: string;
  href: string;
  access: AccessLevel | null;
};

export type NavGroupConfig = {
  id: string;
  groupName: string;
  items: NavItemConfig[];
};

export const navGroupsConfig: NavGroupConfig[] = [
  {
    id: "introduction",
    groupName: "Introduction",
    items: [
      {
        id: 0,
        name: "Welcome to JS Simplified",
        href: "/",
        access: null
      }
    ]
  },
  {
    id: "fundamentals",
    groupName: "Fundamentals",
    items: [
      { id: 1, name: "Introduction", href: "/fundamentals/intro", access: AccessLevel.PUBLIC },
      { id: 2, name: "Interpreter", href: "/fundamentals/interpreter", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 3, name: "Type system", href: "/fundamentals/type-system", access: AccessLevel.PUBLIC },
      { id: 4, name: "Variables", href: "/fundamentals/variables", access: AccessLevel.PUBLIC },
      { id: 5, name: "Data types", href: "/fundamentals/data-types", access: AccessLevel.PUBLIC },
      { id: 6, name: "Operators", href: "/fundamentals/operators", access: AccessLevel.PUBLIC },
      { id: 7, name: "Expressions", href: "/fundamentals/expressions", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 8, name: "Statements", href: "/fundamentals/statements", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 9, name: "Conditionals", href: "/fundamentals/conditionals", access: AccessLevel.PUBLIC },
      { id: 10, name: "Loops", href: "/fundamentals/loops", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 11, name: "Functions", href: "/fundamentals/functions", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 12, name: "Function Expressions", href: "/fundamentals/function-expressions", access: AccessLevel.PUBLIC },
      { id: 13, name: "Arrays", href: "/fundamentals/arrays", access: AccessLevel.PUBLIC },
      { id: 14, name: "Objects", href: "/fundamentals/objects", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 15, name: "Strings", href: "/fundamentals/strings", access: AccessLevel.PUBLIC }
    ]
  },
  {
    id: "intermediate-concepts",
    groupName: "Intermediate Concepts",
    items: [
      { id: 16, name: "Scope", href: "/intermediate/scope", access: AccessLevel.PUBLIC },
      { id: 17, name: "Hoisting", href: "/intermediate/hoisting", access: AccessLevel.PAID },
      { id: 18, name: "Closures", href: "/intermediate/closures", access: AccessLevel.PAID },
      { id: 19, name: "Maps", href: "/intermediate/maps", access: AccessLevel.PAID },
      { id: 20, name: "Sets", href: "/intermediate/sets", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 21, name: "Reference Behavior", href: "/intermediate/mutability", access: AccessLevel.PUBLIC },
      { id: 22, name: "This keyword", href: "/intermediate/this", access: AccessLevel.PAID },
      { id: 23, name: "Ecmascript", href: "/intermediate/es6-features", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 24, name: "Destructuring", href: "/intermediate/destructuring", access: AccessLevel.FREE_WITH_LOGIN }
    ]
  },
  {
    id: "advanced",
    groupName: "Advanced",
    items: [
      { id: 25, name: "Asynchronous JS", href: "/advanced/async-js", access: AccessLevel.PUBLIC },
      { id: 26, name: "Async/Await", href: "/advanced/async-await", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 27, name: "Event Loop", href: "/advanced/event-loop", access: AccessLevel.PAID },
      { id: 28, name: "Proxy Objects", href: "/advanced/proxy", access: AccessLevel.PAID },
      { id: 29, name: "Symbols", href: "/advanced/symbols", access: AccessLevel.FREE_WITH_LOGIN },
      { id: 30, name: "Error Handling", href: "/advanced/error-handling", access: AccessLevel.PUBLIC },
      { id: 31, name: "Modules", href: "/advanced/modules", access: AccessLevel.PUBLIC },
      { id: 32, name: "Classes and Prototypes", href: "/advanced/classes-prototypes", access: AccessLevel.PAID },
      { id: 33, name: "Functional Programming Concepts", href: "/advanced/functional-programming", access: AccessLevel.PAID }
    ]
  }
];
