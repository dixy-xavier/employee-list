import { set } from "mockdate";
import { describe, it, expect } from "vitest";
import { calculateAge } from "./utils";

describe("calculateAge", () => {
  const fixedDate = '2022-03-31T00:00:00.000Z'; // Fixed date for testing
  set(fixedDate);
  // Set the mock date to March 31, 2022
  // This will ensure that the current date is always the same during tests
  // and the age calculation is consistent.

  it("should return the correct age for a given date of birth", () => {
    const dob = "01/01/2000"; // January 1, 2000
    const age = calculateAge(dob);
    expect(age).toBe(22);
  });

  it("should return 0 if the date of birth is the same as the current date", () => {
    const dob = "01/01/2023"; // January 1, 2023
    const age = calculateAge(dob);
    expect(age).toBe(0);
  });

  it("should handle leap years correctly", () => {
    const dob = "02/29/2004"; // February 29, 2004
    const age = calculateAge(dob);
    expect(age).toBe(18);
  });

  it("should return the correct age if the birthday has not occurred yet this year", () => {
    const dob = "07/15/2000"; // July 15, 2000
    const age = calculateAge(dob);
    expect(age).toBe(21);
  });

  it("should return the correct age if the birthday has already occurred this year", () => {
    const dob = "03/31/2000"; // July 15, 2000
    const age = calculateAge(dob);
    expect(age).toBe(22);
  });
});
