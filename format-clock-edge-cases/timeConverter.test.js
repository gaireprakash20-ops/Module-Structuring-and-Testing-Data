import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midnight with double digit minutes", function () {
  assert.equal(formatAs12HourClock("00:25"), "12:25 am");
});

test("can correctly convert noon with the double digits minutes ", function () {
  assert.equal(formatAs12HourClock("12:20"), "12:20 pm");
});

test("can correctly convert evening with single-digit minutes", function () {
  assert.equal(formatAs12HourClock("23:05"), "11:05 pm");
});

test("can correctly convert one minute before noon", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("can correctly convert one hour after noon", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});
