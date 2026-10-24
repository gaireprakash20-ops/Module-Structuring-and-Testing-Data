// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});
test("should repeat the string count times", () => {
  const str = "world";
  const count = 4;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("worldworldworldworld");
});
test("should repeat the string count times", () => {
  const str = "bye";
  const count = 5;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("byebyebyebyebye");
});

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.
test("should return the original string when count is 1", () => {
  expect(repeatStr("hello", 1)).toEqual("hello");
});
test("should return the original string when count is 1", () => {
  expect(repeatStr("world", 1)).toEqual("world");
});
test("should return the original string when count is 1", () => {
  expect(repeatStr("goodday", 1)).toEqual("goodday");
});

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.
// Case: handle count of 1
test("should return an empty string when count is 0", () => {
  expect(repeatStr("hello", 0)).toEqual("");
});
test("should return an empty string when count is 0", () => {
  expect(repeatStr("prakash", 0)).toEqual("");
});
test("should return an empty string when count is 0", () => {
  expect(repeatStr("snake", 0)).toEqual("");
});

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
test("should throw an error when count is negative", () => {
  expect(() => repeatStr("hello", -1)).toThrow();
});
test("should throw an error when count is negative", () => {
  expect(() => repeatStr("apple", -1)).toThrow();
});
