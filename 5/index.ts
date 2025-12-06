import { log } from "../utils/config";

type Range = { start: number; end: number };

function inRange(test: number, { start, end }: Range) {
  return test >= start && test <= end;
}

export const main = (input: string, includeIngredients: boolean = true) => {
  const splitInput = input.split("\n\n");
  const freshIDs: Array<Range> = splitInput[0]!.split("\n").map((range) => {
    const [start, end] = range.split("-").map(Number);
    return { start: start || 0, end: end || 0 };
  });

  if (includeIngredients) {
    let fresh = 0;
    const ingredientIDs = splitInput[1]!.split("\n").map(Number);

    for (const id of ingredientIDs) {
      for (const freshID of freshIDs) {
        if (inRange(id, freshID)) {
          fresh++;
          break;
        }
      }
    }

    return fresh;
  } else {
    let addedRanges: Array<Range> = [];

    // Post-sickness-brain sure makes advent of code logic an adventure
    return freshIDs.reduce((acc: number, curr: Range) => {
      let start = curr.start;
      let end = curr.end;

      const rangesToRemove = [];
      for (let range of addedRanges) {
        const startInRange = inRange(start, range);
        const endInRange = inRange(end, range);

        if (startInRange || endInRange) {
          if (startInRange && endInRange) {
            return acc;
          } else if (startInRange) {
            start = range.end + 1; // inclusive
          } else if (endInRange) {
            end = range.start - 1; // inclusive
          }
        } else if (inRange(range.start, curr) && inRange(range.end, curr)) {
          rangesToRemove.push(range);
        }
      }

      for (let range of rangesToRemove) {
        const diff = range.end - range.start + 1; // inclusive
        acc -= diff;
      }

      if (start <= end) {
        const diff = end - start + 1; // inclusive
        addedRanges.push({ start, end });
        acc += diff;
      }
      return acc;
    }, 0);
  }
};
