import { afterEach, beforeAll, describe, expect, test } from "bun:test";
import { main } from ".";
import { getInput, testConfig } from "../utils";

const day = 5;
const year = new Date().getFullYear();

const EXAMPLE_INPUT = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

const PUZZLE_INPUT = await getInput({ year, day });

describe(`Day ${day}`, async () => {
  afterEach(() => {
    testConfig.log = false;
  });

  test(`Day ${day} Example`, () => {
    const fresh = main(EXAMPLE_INPUT);
    expect(fresh).toBe(3);
  });

  test(`Day ${day} Solution`, async () => {
    const answer = main(PUZZLE_INPUT);
    expect(answer).toBe(577);
  });

  test(`Day ${day} Example`, () => {
    const fresh = main(EXAMPLE_INPUT, false);
    expect(fresh).toBe(14);
  });

  test(`Day ${day} Solution`, async () => {
    testConfig.log = true;
    const answer = main(PUZZLE_INPUT, false);
    expect(answer).toBe(350513176552950);
  });
});
