import { log } from "../utils/config";

export const main = (input: string, recurse: boolean = false) => {
  const rows = input.split("\n");
  let replaced = 0;
  let accessible: Array<string> = [];

  function replaceTPRolls() {
    accessible = [];

    for (let i = 0; i <= rows.length - 1; i++) {
      for (let j = 0; j <= rows[0]!.length - 1; j++) {
        if (!accessible.includes(`${i},${j}`)) {
          if (rows[i]![j] === "@") {
            if (getAdjacent8(i, j) < 4) {
              rows[i] =
                `${rows[i]?.substring(0, j)}.${rows[i]?.substring(j + 1)}`;
              accessible.push(`${i},${j}`);
            } else {
            }
          }
        }
      }
    }

    replaced += accessible.length;
  }

  function getAdjacent8(row: number, col: number) {
    let found = 0;

    const bottomRow = rows.length - 1;
    const rightCol = rows[0]!.length - 1;

    // row & grid not an edge
    if (row !== 0 && col !== 0) {
      found += rows[row - 1]![col - 1] === "@" ? 1 : 0; // TL
    }
    if (row !== 0) {
      found += rows[row - 1]![col] === "@" ? 1 : 0; // T
    }
    if (row !== 0 && col !== rightCol) {
      found += rows[row - 1]![col + 1] === "@" ? 1 : 0; // TR
    }
    if (col !== rightCol) {
      found += rows[row]![col + 1] === "@" ? 1 : 0; // R
    }
    if (row !== bottomRow && col !== rightCol) {
      found += rows[row + 1]![col + 1] === "@" ? 1 : 0; // BR
    }
    if (row !== bottomRow) {
      found += rows[row + 1]![col] === "@" ? 1 : 0; // B
    }
    if (row !== bottomRow && col !== 0) {
      found += rows[row + 1]![col - 1] === "@" ? 1 : 0; // BL
    }
    if (col !== 0) {
      found += rows[row]![col - 1] === "@" ? 1 : 0; // L
    }

    return found;
  }

  replaceTPRolls();

  if (recurse) {
    let counter = 0;
    while (accessible.length > 0) {
      // failsafe... >.>
      if (counter > 100) break;
      counter++;
      replaceTPRolls();
    }
  }

  return replaced;
};
