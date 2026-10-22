// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});
test("should count multiple occurrences of a character mixed with other characters", () => {
  const str = "banana";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should return 1 when the character appears exactly once", () => {
  const str = "hello";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should count non-adjacent occurrences of a character", () => {
  const str = "abcabca";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count spaces and special characters", () => {
  const str = "a b c";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("should return 0 when there is not repeated char in str", () => {
  const str = "hello";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("should be case-sensitive", () => {
  const str = "Apple";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("should return 0 when str is an empty string", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
