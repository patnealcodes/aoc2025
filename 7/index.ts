import { log } from "../utils/config";

export const second = (input: string) => {
  const splitInput = input.split("\n");
  // const splitInput = input.split("\n").slice(0, 5);
  const lineLength = splitInput[0]!.length;
  const splitter = "^";
  const timelineSplitLocations = new Set();
  let timelines = 0;

  function split(beamIndex: number, currRow: number) {
    const timelineSplitLocation = `${currRow}-${beamIndex}`;
    if (timelineSplitLocations.has(timelineSplitLocation)) {
      return;
    }
    timelineSplitLocations.add(timelineSplitLocation);
    timelines++;

    for (let row = currRow + 1; row < splitInput.length; row++) {
      const line = splitInput[row]!;

      if (line[beamIndex] === splitter) {
        console.log("new split at", timelineSplitLocation);
        if (beamIndex !== 0) {
          console.log("new timeline at", `${row}-${beamIndex - 1}`);
          split(beamIndex - 1, row + 1);
        }
        if (beamIndex !== lineLength - 1) {
          console.log("new timeline at", `${row}-${beamIndex + 1}`);
          split(beamIndex + 1, row + 1);
        }
        return;
      }
    }
  }

  split(splitInput[0]!.indexOf("S"), 1);

  return timelines;
};

export const first = (input: string) => {
  const splitInput = input.split("\n");
  const lineLength = splitInput[0]!.length;
  const initChar = "S";
  const splitter = "^";
  let splits = 0;
  const beamIndexes = new Set<number>();

  // initial beam
  beamIndexes.add(splitInput[0]?.indexOf(initChar)!);

  for (let i = 1; i < splitInput.length; i++) {
    const line = splitInput[i]!;

    for (let bi of [...beamIndexes]) {
      if (i === splitInput.length - 1) {
      }
      if (line[bi] === splitter) {
        beamIndexes.delete(bi);
        if (bi !== 0) beamIndexes.add(bi - 1);
        if (bi !== lineLength - 1) beamIndexes.add(bi + 1);
        splits++;
      }
    }
  }

  return splits;
};
