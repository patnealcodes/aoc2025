import { log } from "../utils/config";

function cephalopodMath(terms: Array<string>, length: number) {
  const p = Array.from({ length }, () => "");
  for (let term of terms) {
    for (let i = term.length - 1; i >= 0; i--) {
      p[i]! += term[i];
    }
  }
  return p.map((pr) => parseInt(pr, 10));
}

export const wtf = (input: string) => {
  let answer = 0;

  const rows = input.split("\n");
  let operators = rows.pop();
  if (!operators) {
    operators = rows.pop();
  }
  const problems = [];
  let currentOperator = operators![0];

  //* Get column ranges based on operators *//
  let prev = 0; // store previous slice point
  for (let i = 1; i <= operators!.length; i++) {
    const lastIndex = i >= operators!.length;
    if (/\+|\*/.test(operators![i]!) || lastIndex) {
      const next = lastIndex ? i : i - 1; // i'm too tired for off-by-one errors right now
      const pr = [];
      for (let j = 0; j < rows.length; j++) {
        pr.push(rows[j]!.slice(prev, next));
      }
      const problem = cephalopodMath(pr, next - prev);
      const thisAns = problem.reduce(
        (acc, curr) => {
          if (currentOperator === "*") {
            return (acc *= curr);
          } else {
            return (acc += curr);
          }
        },
        currentOperator === "*" ? 1 : 0,
      );
      answer += thisAns;
      problems.push(problem);
      prev = i;
      currentOperator = operators![i];
    }
  }

  return {
    problems,
    answer,
  };
};

export const main = (input: string) => {
  let ans = 0;
  const rows = input
    .trim()
    .split("\n")
    .map((r) => r.trim().split(/\s+/).map(String));
  const operators = rows.pop();

  for (let i = 0; i <= operators!.length - 1; i++) {
    const op = operators![i];

    switch (op) {
      case "+":
        const sum = rows
          .map((row) => row[i])
          .reduce((acc, curr) => acc + Number(curr), 0);
        ans += sum;
        break;
      case "*":
        const product = rows
          .map((row) => row[i])
          .reduce((acc, curr) => acc * Number(curr), 1);
        ans += product;
        break;
      default:
        throw new Error(`Unknown operator: ${op}`);
    }
  }

  return ans;
};
