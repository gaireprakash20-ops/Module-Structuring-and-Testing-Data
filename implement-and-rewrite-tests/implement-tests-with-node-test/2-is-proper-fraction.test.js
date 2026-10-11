import assert from "node:assert";

import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(1, 2), true);
});
test("Basic proper fraction", () => {
  assert.equal(isProperFraction(3, 5), true);
});
test("Basic proper fraction", () => {
  assert.equal(isProperFraction(2, 2), false);
});
test("Basic proper fraction", () => {
  assert.equal(isProperFraction(5, 3), false);
});
test("Basic proper fraction", () => {
  assert.equal(isProperFraction(0, 2), true);
});
test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 0), false);
});
