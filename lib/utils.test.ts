import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn()", () => {
  it("merges later Tailwind classes over earlier ones", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("drops falsy values", () => {
    expect(cn("a", false && "b", null, undefined, "c")).toBe("a c");
  });

  it("resolves conditional object form", () => {
    expect(cn({ foo: true, bar: false }, "baz")).toBe("foo baz");
  });
});
