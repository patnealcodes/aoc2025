import { log } from "../utils/config";
function chunk(id: string, size: number) {
  return id.match(new RegExp(`.{1,${size}}`, "g"));
}
function repeatingChunks(id: string, size: number) {
  const chunks = chunk(id, size);
  return new Set(chunks).size === 1;
}
export const main = (input: string) => {
  const splitInput = input.split(",");
  const doubledIDs = [];
  const repeatedIDs = [];

  for (const input of splitInput) {
    const [firstID, lastID] = input.split("-").map((n) => parseInt(n));

    if (!firstID || !lastID) break;

    for (let i = firstID; i <= lastID; i++) {
      const id = i.toString();
      let doubled = false;

      // Doubled
      if (id.length % 2 === 0) {
        const half = id.length / 2;
        if (id.slice(0, half) === id.slice(half)) {
          doubledIDs.push(i);
          doubled = true;
          log(`${id} is doubled`);
        }
      }

      // Repeating
      if (!doubled) {
        for (let j = 1; j <= id.length / 2; j++) {
          if (id.length % j === 0) {
            if (repeatingChunks(id, j)) {
              log(`${id} repeats in chunks of ${j}`);
              repeatedIDs.push(i);
              log(`${id} is repeated`);
            }
          }
        }
      }
    }
    log("\n");
  }

  const doubledSum = doubledIDs.reduce((a, b) => a + b, 0);
  const repeatedSum = repeatedIDs.reduce((a, b) => a + b, 0);
  const doubledLength = doubledIDs.length;
  const repeatedLength = repeatedIDs.length;

  const answer = {
    doubledLength,
    doubledSum,
    repeatedLength,
    repeatedSum,
    totalLength: doubledIDs.length + repeatedIDs.length,
    totalSum: doubledSum + repeatedSum,
  };

  log(`${doubledIDs.length + repeatedIDs.length} invalid codes`);
  log({ answer });

  return answer;
};
