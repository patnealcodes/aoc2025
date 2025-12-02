import { afterEach, beforeAll, describe, expect, test } from "bun:test";
import { main } from ".";
import { getInput, testConfig } from "../utils";

const day = 2;
const year = new Date().getFullYear();

// const EXAMPLE_INPUT = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
// 1698522-1698528,446443-446449,38593856-38593862,565653-565659,
// 824824821-824824827,2121212118-2121212124`;
const EXAMPLE_INPUT = `95-115`;

const PUZZLE_INPUT = await getInput({ year, day });

describe(`Day ${day}`, async () => {
  afterEach(() => {
    testConfig.log = false;
  });

  // test(`Day ${day} First Example`, () => {
  //   testConfig.log = true;

  //   const { mirrored } = main(EXAMPLE_INPUT);
  //   expect(mirrored).toBe(1227775554);
  // });

  test(`Day ${day} Second Example`, () => {
    testConfig.log = true;

    const { mirrored, repeated } = main(EXAMPLE_INPUT);
    expect(mirrored + repeated).toBe(4174379265);
  });

  test.skip(`Day ${day} Solution`, async () => {
    const { mirrored, repeated } = main(PUZZLE_INPUT);
    expect(mirrored).toBe(18595663903);
  });
});
