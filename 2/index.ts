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
  const mirroredIDs = [];
  const repeatedIDs = [];

  for (const input of splitInput) {
    const [firstID, lastID] = input.split("-").map((n) => parseInt(n));
    log(`checking ${input}`);
    log(`firstID ${firstID}`);
    log(`lastID ${lastID}`);

    if (!firstID || !lastID) break;

    for (let i = firstID; i <= lastID; i++) {
      const id = i.toString();

      // Mirrored
      if (id.length % 2 === 0) {
        const half = id.length / 2;
        if (id.slice(0, half) === id.slice(half)) {
          log(id, "is mirrored");
          mirroredIDs.push(i);
        }
        // Repeating
      } else {
        log(`${id} not mirrored`);
        // check single digits repeating before resorting to a loop
        log('id.split("")', id.split(""));
        log('new Set(id.split("")).size', new Set(id.split("")).size);
        if (new Set(id.split("")).size === 1) {
          log(`${new Set(id.split("")).size} repeats every char`);
          repeatedIDs.push(i);
        } else {
          // loop through the different chunk sizes. start at 2 since we checked 1 already
          for (let j = 2; j < id.length - 1; j++) {
            log(`checking for ${j} repeating chunks in ${id}`);
            // If the id can't evenly be chunked to this size, skip it
            if (id.length % j === 0) {
              log(`${id} is evenly divisible by ${j}`);
              if (repeatingChunks(id, j)) {
                log(`${id} repeats in chunks of ${j}`);
                repeatedIDs.push(i);
              }
            }
          }
        }
      }
    }
    log("\n");
  }

  const answer = {
    mirrored: mirroredIDs.reduce((a, b) => a + b),
    repeated: repeatedIDs.reduce((a, b) => a + b),
    // repeated: 0,
  };

  log({ answer });

  return answer;
};
