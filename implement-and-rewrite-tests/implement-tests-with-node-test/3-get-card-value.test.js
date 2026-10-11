import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// Valid cards
test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Valid lowest number card", () => {
  assert.equal(getCardValue("2♠"), 2);
});

test("Valid double-digit card", () => {
  assert.equal(getCardValue("10♠"), 10);
});

test("Valid Ace card", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Valid Jack card", () => {
  assert.equal(getCardValue("J♠"), 10);
});

test("Valid Queen card", () => {
  assert.equal(getCardValue("Q♦"), 10);
});

test("Valid King card", () => {
  assert.equal(getCardValue("K♥"), 10);
});

test("Valid card with clubs suit", () => {
  assert.equal(getCardValue("5♣"), 5);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

test("Card with no suit", () => {
  assert.throws(
    () => getCardValue("A"),
    /Expected a number followed by a suit, but got "A"/
  );
});

test("Invalid suit", () => {
  assert.throws(
    () => getCardValue("5X"),
    /Expected a number followed by a suit, but got "5X"/
  );
});

test("Invalid rank", () => {
  assert.throws(
    () => getCardValue("Z♠"),
    /Expected a number followed by a suit, but got "Z♠"/
  );
});

test("Rank too low", () => {
  assert.throws(
    () => getCardValue("1♥"),
    /Expected a number followed by a suit, but got "1♥"/
  );
});

test("Rank too high", () => {
  assert.throws(
    () => getCardValue("11♦"),
    /Expected a number followed by a suit, but got "11♦"/
  );
});

test("Empty string", () => {
  assert.throws(
    () => getCardValue(""),
    /Expected a number followed by a suit, but got ""/
  );
});

test("Suit before rank", () => {
  assert.throws(
    () => getCardValue("♠A"),
    /Expected a number followed by a suit, but got "♠A"/
  );
});
