import { afterEach, beforeAll, describe, expect, test } from "bun:test";
import { main } from "./main";
import { getInput, testConfig } from "../utils";

const day = 2;
const year = new Date().getFullYear();

const EXAMPLE_INPUT = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`;

const PUZZLE_INPUT = await getInput({ year, day });

describe(`Day ${day}`, async () => {
  afterEach(() => {
    testConfig.log = false;
  });

  // test(`Day ${day} First Example`, () => {
  //   const { doubledSum } = main(EXAMPLE_INPUT);
  //   expect(doubledSum).toBe(1227775554);
  // });

  // test(`Day ${day} Second Example`, () => {
  //   testConfig.log = true;
  //   const { totalSum } = main(EXAMPLE_INPUT);
  //   expect(totalSum).toBe(4174379265);
  // });

  // test(`Day ${day} First Solution`, async () => {
  //   const { doubledSum } = main(PUZZLE_INPUT);
  //   expect(doubledSum).toBe(18595663903);
  // });

  test(`Day ${day} Second Solution`, async () => {
    const { totalSum } = main(PUZZLE_INPUT);
    expect(totalSum).toBe(19058204438);
  });
});
