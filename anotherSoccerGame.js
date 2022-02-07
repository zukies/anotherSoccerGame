const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1)
// for (const goals of scored) console.log(goals);
const goalsScored = game.scored.entries();
for (const [goalNr, player] of goalsScored)
  console.log(`Goal ${goalNr + 1}: ${player}`);

//2)
const ave = Object.entries(game.odds);
const games = Object.entries(game);
for (const [i, { x: draw, team1, team2 }] of games) {
  const average = (draw + team1 + team2) / ave.length;
  console.log(average);
}

//3)
for (const [team, odds] of ave) {
  const wTeam = team === "x" ? `a draw` : `odd of victory ${game[team]} by`;
  console.log(wTeam, odds);
}

//4)
//BONUS CHALLENGE
//How to solve this:
//Q) How to put multiple arrays into one empty object without hard coding it in
// Q) If a player scores more than once, how to  add to the number of their goals to their names instead of just adding another name to the bottom of the goals list ending up with the same person's name appearing multiple times
// A) Find out if the element actually exists within the object, if it doesn't then add it using Object[property]=1, if it already exists then add to existing number

// 4)
const scorer = {};
const players = Object.values(game.scored);
for (const player of players) {
  scorer[player] ? scorer[player]++ : (scorer[player] = 1);
}
console.log(scorer);
