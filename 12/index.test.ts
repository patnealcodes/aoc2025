import { afterEach, beforeAll, describe, expect, test } from "bun:test";
import { main } from ".";
import { getInput, testConfig } from "../utils";

const day = 1;
const year = new Date().getFullYear();

const EXAMPLE_INPUT = `<EXAMPLE_INPUT_GOES_HERE>`;

const PUZZLE_INPUT = await getInput({ year, day });

describe(`Day ${day}`, async () => {
  afterEach(() => {
    testConfig.log = false;
  });

  test(`Day ${day} Example`, () => {
    testConfig.log = true;

    const answer = main(EXAMPLE_INPUT);
    expect(answer).toBe(37);
  });

  test.skip(`Day ${day} Solution`, async () => {
    const answer = main(PUZZLE_INPUT);
    expect(answer).toBe(37);
  });
});
