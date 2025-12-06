import { log } from "../utils/config";

export const main = (input: string, digits: number) => {
  const banks = input.trim().split("\n");
  let sum = 0;

  for (let bank of banks) {
    const joltage = [];
    const high = { number: parseInt(bank[0]!), index: 0 };

    log(`bank: ${bank}`);
    for (let digit = 0; digit < digits; digit++) {
      for (
        let i = high.index + 1;
        i < bank.length - (digits - digit - 1);
        i++
      ) {
        log(`digit ${digit + 1} start: ${i}`);
        const item = parseInt(bank[i]!);
        if (item > high.number) {
          log(`new high: ${item} at index ${i}`);
          high.number = item;
          high.index = i;
        }
        if (item === 9) {
          i++;
        }
        log(`${item}`);
      }
      joltage.push(high.number);
      high.number = 0;
    }

    log({ joltage });
    log(`joltage.join(""): ${joltage.join("")}`);
    sum += parseInt(joltage.join(""));
  }

  return sum;
};
