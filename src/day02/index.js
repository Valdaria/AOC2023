import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split("\n");

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const res = input
    .map((line) => {
      const id = line.slice(5, line.indexOf(":"));
      const colors = {
        red: 0,
        green: 0,
        blue: 0
      }

      const bags = line.split(":")[1].split(";")
      let isPossible = true
      
      bags.map((content) => {
        const cols = content.split(",")
        cols.forEach((color) => {
          const spl = color.trim().split(" ")
          colors[spl[1]] = parseInt(spl[0])
          if(colors.red > 12 || colors.green > 13 || colors.blue > 14) {
            isPossible = false
          }
        }) 
      })
      return isPossible ? parseInt(id) : 0
    })
    .reduce((acc, val) => {
      return acc+val;
    }, 0)

return res;
};

const part2 = (rawInput) => {
  /**
   * @type String[]
   */
  const input = parseInput(rawInput);
  const res = input
    .map((line) => {
      const colors = {
        red: 0,
        green: 0,
        blue: 0
      }

      const bags = line.split(":")[1].split(";")
      
      bags.map((content) => {
        const cols = content.split(",")
        cols.forEach((color) => {
          const spl = color.trim().split(" ")
          colors[spl[1]] = Math.max(parseInt(spl[0]), colors[spl[1]])
        }) 
      })
      return colors
    })
    .map(val => {
      return val.red * val.green * val.blue
    })
    .reduce((acc, val) => {
      return acc+val;
    }, 0)

return res;
};

run({
  part1: {
    tests: [
      {
        input: `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`,
        expected: 8,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`,
        expected: 2286,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
