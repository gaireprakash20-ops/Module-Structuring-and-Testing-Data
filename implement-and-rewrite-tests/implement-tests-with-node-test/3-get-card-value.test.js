import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(() => getCardValue("15"));
});
test("Valid", () => {
  assert.throws(() => getCardValue("11"));
});

// TODO: What other invalid card cases can you think of?
