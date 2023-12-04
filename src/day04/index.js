import run from "aocrunner";

const parseInput = (rawInput) => {
  return rawInput
    .split("\n")
    .map((line) => line.split(":")[1])
    .map((line) => line.replace(/\s+/g, " "))
    .map((line) => {
        const splitted = line.split("|")
        return {
          wining: splitted[0].trim(),
          players: splitted[1].trim()
        }
      }
    )
    .map((card) => {
      return {
        wining: card.wining.split(" "),
        players: card.players.split(" "),
      }
    })

};

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const res = input
    .map((card) => {
        let acc = 0;
        card.wining.forEach((num) => {
          if(card.players.includes(num)) {
            acc = acc == 0 ? 1 : acc*2
          }
        } )
        console.log(acc)
        return acc
    })
    .reduce((acc, point) => {
      console.log(acc, point)
      return acc+point
    }, 0)
  return res;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  
  return ;
};

run({
  part1: {
    tests: [
      {
        input: `
        Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
        Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
        Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
        Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
        Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
        Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
        `,
        expected: 13,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
