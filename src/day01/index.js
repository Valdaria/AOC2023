import run from "aocrunner";

const numbers = ["0","1","2","3","4","5","6","7","8","9"]

const numbersText = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
}

const parseInput = (rawInput) => rawInput.split("\n");

const part1 = (rawInput) => {
  /**
   * @type String
   */
  const input = parseInput(rawInput);

  const total = input
    .map((line) => {
      const chars = line.split("");
      const first = chars.find((el) => numbers.includes(el))
      const reversedChars = chars.slice().reverse();
      const last = reversedChars.find((el) => numbers.includes(el))
      return parseInt(first+last);
    })
    .reduce((acc, val) => acc+val)

  return total;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  
  return "La Flemme";
};

run({
  part1: {
    tests: [
      {
        input: `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`,
        expected: 142,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`,
        expected: '281',
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
});