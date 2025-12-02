import { afterEach, beforeAll, describe, expect, test } from "bun:test";
import { findPassword } from ".";
import { getInput, testConfig } from "../utils";

const day = 1;
const year = 2025;

const TEST_INPUT = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

const PUZZLE_INPUT = await getInput({ year, day });

describe(`Day ${day}`, async () => {
  afterEach(() => {
    testConfig.log = false;
  });

  test(`Day ${day} Example`, () => {
    testConfig.log = false;

    const { zerosLanded, zerosClicked } = findPassword(50, TEST_INPUT);
    expect(zerosLanded).toBe(3);
    expect(zerosClicked).toBe(6);
  });

  test(`Day ${day} Solution`, async () => {
    const { zerosLanded, zerosClicked } = findPassword(50, PUZZLE_INPUT);
    expect(zerosLanded).toBe(1150);
    expect(zerosClicked).toBe(6738);
  });
});
