import { afterEach, beforeAll, describe, expect, test } from "bun:test";
import { main } from ".";
import { getInput, testConfig } from "../utils";

const day = 3;
const year = new Date().getFullYear();

const EXAMPLE_INPUT = `987654321111111
811111111111119
234234234234278
818181911112111`;
// const EXAMPLE_INPUT = `234234234234278`;

const PUZZLE_INPUT = await getInput({ year, day });

describe(`Day ${day}`, async () => {
  afterEach(() => {
    testConfig.log = false;
  });

  test(`Day ${day} First Example`, () => {
    // testConfig.log = true;
    const sum = main(EXAMPLE_INPUT, 2);
    expect(sum).toBe(357);
  });

  test(`Day ${day} Second Example`, () => {
    // testConfig.log = true;
    const sum = main(PUZZLE_INPUT, 2);
    expect(sum).toBe(16887);
  });

  test(`Day ${day} First Solution`, async () => {
    const sum = main(EXAMPLE_INPUT, 12);
    expect(sum).toBe(3121910778619);
  });

  test(`Day ${day} Second Solution`, async () => {
    const sum = main(PUZZLE_INPUT, 12);
    expect(sum).toBe(167302518850275);
  });
});
