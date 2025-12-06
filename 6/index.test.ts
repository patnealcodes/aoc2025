import { afterEach, beforeAll, describe, expect, test } from "bun:test";
import { main, wtf } from ".";
import { getInput, testConfig } from "../utils";

const day = 6;
const year = new Date().getFullYear();

const EXAMPLE_INPUT = `123 328  51 64
 45 64  387 23
  6 98  215 314
*   +   *   +  `;
const EXAMPLE_INPUT_2 =
  `123 328  51 64  \n` +
  ` 45 64  387 23  \n` +
  `  6 98  215 314 \n` +
  `*   +   *   +  `;

const PUZZLE_INPUT = await getInput({ year, day });

describe(`Day ${day}`, async () => {
  afterEach(() => {
    testConfig.log = false;
  });

  test(`Day ${day} Example`, () => {
    testConfig.log = true;

    const answer = main(EXAMPLE_INPUT);
    expect(answer).toBe(4277556);
  });

  test(`Day ${day} Solution`, async () => {
    const answer = main(PUZZLE_INPUT);
    expect(answer).toBe(5227286044585);
  });

  test(`Day ${day} 2 Example Trying to make sense of it`, () => {
    testConfig.log = true;

    const { problems, answer } = wtf(EXAMPLE_INPUT_2);
    expect(problems[0]!.toString()).toBe([1, 24, 356].toString());
  });

  test(`Day ${day} 2 Example`, () => {
    testConfig.log = true;

    const { answer } = wtf(EXAMPLE_INPUT_2);
    expect(answer).toBe(3263827);
  });

  test(`Day ${day} Solution`, async () => {
    const { answer } = wtf(PUZZLE_INPUT);
    expect(answer).toBe(10227753257799);
  });
});
