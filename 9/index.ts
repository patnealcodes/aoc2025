import { log } from "../utils/config";

export const main = (input: string) => {
  const splitInput = input.split("\n");

  log(`input length: ${splitInput.length}`);

  return splitInput.length;
};
