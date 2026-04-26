import { describe, expect, it } from "vitest";
import { AccessLevel } from "@/config/sidebar";
import { buildSidebarViewModel, isNavItemActive } from "@/utils/sidebarViewModel";

describe("isNavItemActive", () => {
  it("matches root path only when pathname is root", () => {
    expect(isNavItemActive("/", "/")).toBe(true);
    expect(isNavItemActive("/fundamentals/intro", "/")).toBe(false);
  });

  it("matches exact lesson route and nested route", () => {
    expect(isNavItemActive("/fundamentals/intro", "/fundamentals/intro")).toBe(true);
    expect(isNavItemActive("/fundamentals/intro/details", "/fundamentals/intro")).toBe(true);
    expect(isNavItemActive("/fundamentals/interpreter", "/fundamentals/intro")).toBe(false);
  });
});

describe("buildSidebarViewModel", () => {
  it("derives display id and active status", () => {
    const groups = buildSidebarViewModel("/fundamentals/interpreter");
    const fundamentals = groups.find((group) => group.id === "fundamentals");
    const interpreter = fundamentals?.items.find((item) => item.href === "/fundamentals/interpreter");

    expect(interpreter?.displayId).toBe("002");
    expect(interpreter?.active).toBe(true);
  });

  it("shows badge only for free and free-with-login items", () => {
    const groups = buildSidebarViewModel("/intermediate/hoisting");
    const intermediate = groups.find((group) => group.id === "intermediate-concepts");
    const hoisting = intermediate?.items.find((item) => item.href === "/intermediate/hoisting");
    const scope = intermediate?.items.find((item) => item.href === "/intermediate/scope");

    expect(hoisting?.access).toBe(AccessLevel.PAID);
    expect(hoisting?.showAccessBadge).toBe(false);
    expect(scope?.access).toBe(AccessLevel.PUBLIC);
    expect(scope?.showAccessBadge).toBe(true);
  });
});
