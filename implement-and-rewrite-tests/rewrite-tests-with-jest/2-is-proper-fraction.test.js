import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// Special case: numerator is zero (0/1 = 0, which is a proper fraction)
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});

// Special case: denominator is zero (not a valid fraction)
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Both positive
test(`should return false when numerator is greater than denominator`, () => {
  expect(isProperFraction(7, 5)).toEqual(false);
});
test(`should return true when numerator is smaller than denominator`, () => {
  expect(isProperFraction(1, 3)).toEqual(true);
});
test(`should return false when numerator equals denominator`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

// Both negative
test(`should return false when both negative and |numerator| is greater`, () => {
  expect(isProperFraction(-7, -5)).toEqual(false); // was true
});
test(`should return true when both negative and |numerator| is smaller`, () => {
  expect(isProperFraction(-5, -7)).toEqual(true); // was false
});
test(`should return false when both negative and |numerator| is slightly greater`, () => {
  expect(isProperFraction(-10, -9)).toEqual(false); // was true
});
test(`should return false when both negative and equal`, () => {
  expect(isProperFraction(-5, -5)).toEqual(false);
});

// Positive numerator, negative denominator
test(`should return false when numerator is positive, denominator negative, |numerator| greater`, () => {
  expect(isProperFraction(7, -5)).toEqual(false);
});
test(`should return false when numerator is positive, denominator negative, equal absolute values`, () => {
  expect(isProperFraction(7, -7)).toEqual(false);
});

// Negative numerator, positive denominator
test(`should return false when numerator is negative, denominator positive, |numerator| greater`, () => {
  expect(isProperFraction(-7, 5)).toEqual(false); // was true
});
test(`should return false when numerator is negative, denominator positive, equal absolute values`, () => {
  expect(isProperFraction(-7, 7)).toEqual(false);
});
