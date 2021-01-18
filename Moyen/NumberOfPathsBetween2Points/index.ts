/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const M: number = parseInt(readline());
const N: number = parseInt(readline());

let carte: string[][] = [];
let memo = {};

for (let i = 0; i < M; i++) {
  const ROW: string = readline();
  const laRow = ROW.split('');

  carte.push(laRow);
};

const chemins = (x: number = 0, y: number = 0) => {
  if (x < 0 || y < 0) return 0;
  if (x >= N || y >= M) return 0;
  if (parseInt(carte[y][x]) === 1) return 0;
  if (x === N - 1 && y === M - 1) return 1;

  const index = x.toString() + '-' + y.toString();

  if (index in memo) {
    return memo[index];
  } else {
    memo[index] = chemins(x + 1, y) + chemins(x, y + 1);
  }

  return memo[index]
};

console.log(chemins());