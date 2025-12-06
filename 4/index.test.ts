import { afterEach, beforeAll, describe, expect, test } from "bun:test";
import { main } from ".";
import { getInput, testConfig } from "../utils";

const day = 4;
const year = new Date().getFullYear();

const EXAMPLE_INPUT = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

const PUZZLE_INPUT = await getInput({ year, day });

describe(`Day ${day}`, async () => {
  afterEach(() => {
    testConfig.log = false;
  });

  // test(`Day ${day} Example`, () => {
  //   testConfig.log = true;

  //   const answer = main(EXAMPLE_INPUT);
  //   expect(answer).toBe(13);
  // });

  // test(`Day ${day} Solution`, async () => {
  //   const answer = main(PUZZLE_INPUT);
  //   expect(answer).toBe(1457);
  // });

  test(`Day ${day} Second Example`, () => {
    testConfig.log = true;

    const answer = main(EXAMPLE_INPUT, true);
    expect(answer).toBe(43);
  });

  test(`Day ${day} Second Solution`, async () => {
    const answer = main(PUZZLE_INPUT, true);
    expect(answer).toBe(8310);
  });
});
