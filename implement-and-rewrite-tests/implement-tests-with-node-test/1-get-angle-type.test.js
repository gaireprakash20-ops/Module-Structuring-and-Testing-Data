import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies Acute angles", () => {
  const right = getAngleType(50);
  assert.equal(right, "Acute angle");
});

test("Classifies Acute angles", () => {
  const right = getAngleType(60.3);
  assert.equal(right, "Acute angle");
});

test("Classifies Acute angles", () => {
  const right = getAngleType(89.9);
  assert.equal(right, "Acute angle");
});
test("Classifies Acute angles", () => {
  const right = getAngleType(1);
  assert.equal(right, "Acute angle");
});
test("Classifies Acute angles", () => {
  const right = getAngleType(33.33);
  assert.equal(right, "Acute angle");
});

test("Classifies Acute angles", () => {
  const right = getAngleType(0.2);
  assert.equal(right, "Acute angle");
});

test("Classifies Obtuse angles", () => {
  const right = getAngleType(90.1);
  assert.equal(right, "Obtuse angle");
});
test("Classifies Obtuse angles", () => {
  const right = getAngleType(100.99);
  assert.equal(right, "Obtuse angle");
});

test("Classifies Obtuse angles", () => {
  const right = getAngleType(115);
  assert.equal(right, "Obtuse angle");
});
test("Classifies Obtuse angles", () => {
  const right = getAngleType(135);
  assert.equal(right, "Obtuse angle");
});
test("Classifies Obtuse angles", () => {
  const right = getAngleType(150);
  assert.equal(right, "Obtuse angle");
});
test("Classifies Obtuse angles", () => {
  const right = getAngleType(179);
  assert.equal(right, "Obtuse angle");
});
