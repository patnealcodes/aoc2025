// Idea/implementation from https://github.com/caderek/aocrunner
import fs from "fs";

const BASE_URL = "https://adventofcode.com";
// const BASE_URL='https://adventofcode.com/2025/day/1/input'

export const getInput = async ({
  year,
  day,
}: {
  year: number;
  day: number;
}) => {
  const INPUT_CACHE_FOLDER = "./input-cache";
  const CACHED_FILE_PATH = `${INPUT_CACHE_FOLDER}/${year}-${day}.txt`;

  if (fs.existsSync(CACHED_FILE_PATH)) {
    console.log(`Input for ${year}/${day} loaded from local file`);
    return fs.promises.readFile(CACHED_FILE_PATH, "utf8");
  }

  const response = await fetch(`${BASE_URL}/${year}/day/${day}/input`, {
    headers: {
      cookie: `session=${process.env.AOC_SESSION_KEY}`,
      "content-type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch input for ${year}/${day}: ${response.status}`,
    );
  }

  const input = await response.text();

  if (!fs.existsSync(INPUT_CACHE_FOLDER)) {
    fs.mkdirSync(INPUT_CACHE_FOLDER);
  }
  fs.writeFileSync(CACHED_FILE_PATH, input);
  console.log(`Input for ${year}/${day} fetched & saved`);

  return input;
};
