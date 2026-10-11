import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
// Case 2: Face Cards (J, Q, K)
test(`Should return 10 when given a Face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
});
test(`Should return 10 when given a Face card`, () => {
  expect(getCardValue("K♠")).toEqual(10);
});
test(`Should return 10 when given a Face card`, () => {
  expect(getCardValue("Q♠")).toEqual(10);
});
//case 3: Number Cards (2-10)
test(`Should return 2 when given a number card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
});
test(`Should return 3 when given a number card`, () => {
  expect(getCardValue("3♠")).toEqual(3);
});
test(`Should return 4 when given a number card`, () => {
  expect(getCardValue("4♠")).toEqual(4);
});
test(`Should return 5 when given a number card`, () => {
  expect(getCardValue("5♠")).toEqual(5);
});
test(`Should return 6 when given a number card`, () => {
  expect(getCardValue("6♠")).toEqual(6);
});
test(`Should return 8 when given a number card`, () => {
  expect(getCardValue("8♠")).toEqual(8);
});
test(`Should return 7 when given a number card`, () => {
  expect(getCardValue("7♠")).toEqual(7);
});
test(`Should return 9 when given a number card`, () => {
  expect(getCardValue("9♠")).toEqual(9);
});
test(`Should return 10 when given a number card`, () => {
  expect(getCardValue("10♠")).toEqual(10);
});
// Case 4: Invalid cards
test(`Should throw an error when given a non-card string`, () => {
  expect(() => getCardValue("invalid")).toThrow(
    'Expected a number followed by a suit, but got "invalid"'
  );
});

test(`Should throw an error when the card has no suit`, () => {
  expect(() => getCardValue("A")).toThrow();
});

test(`Should throw an error when the suit is invalid`, () => {
  expect(() => getCardValue("5X")).toThrow();
});

test(`Should throw an error when the rank is invalid`, () => {
  expect(() => getCardValue("Z♠")).toThrow();
});

test(`Should throw an error when the rank is too low`, () => {
  expect(() => getCardValue("1♥")).toThrow();
});

test(`Should throw an error when the rank is too high`, () => {
  expect(() => getCardValue("11♦")).toThrow();
});

test(`Should throw an error when the rank is lowercase`, () => {
  expect(() => getCardValue("a♠")).toThrow();
});

test(`Should throw an error when the suit comes before the rank`, () => {
  expect(() => getCardValue("♠A")).toThrow();
});

test(`Should throw an error when given an empty string`, () => {
  expect(() => getCardValue("")).toThrow();
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
