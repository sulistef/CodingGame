/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = 14;
const R = 6;
// const prize = [13, 12, 11, 9, 16, 17, 100];
// const prize = [12, 14, 52, 7, 3, 1, 1, 89, 98, 100, 12, 5, 6, 8];
// const prize = [12, 14, 52, 7, 3, 1];
// const prize = [12, 13, 11, 14, 16, 12, 15, 9, 7, 18, 8, 20, 31, 14, 16, 12, 18, 9, 10, 22];
const prize = [
  27, 29, 23, 17, 45, 13, 37, 45, 37, 12, 3,
  48, 28, 17, 13, 42, 23, 28, 8, 24, 3, 18,
  13, 42, 33, 21, 12, 3, 25, 7, 30, 20, 46,
  30, 28, 28, 10, 39, 47, 32, 26, 37, 10, 39,
  46, 36, 30, 23, 11, 22
];

// const N: number = parseInt(readline()); //nombres de tournois
// const R: number = parseInt(readline()); //nombres de jours consécutifs

// const createPrize = () => {
//   let prize: number[] = [];

//   for (let i = 0; i < N; i++) {
//     prize.push(parseInt(readline()));
//   }

//   console.error('prize: ', prize);
//   return prize;
// };

// const prize: number[] = createPrize();

let memo = {};

const prix = (index: number, days: number) => {
  if (index === N) return 0;

  if (memo[index.toString() + '-' + days.toString()]) {
    return memo[index.toString() + '-' + days.toString()];
  } else {
    const a = days === 0 ? 0 : prize[index] + prix(index + 1, days - 1);
    const b = prix(index + 1, R);
    memo[index.toString() + '-' + days.toString()] = a > b ? a : b;
  };
  return memo[index.toString() + '-' + days.toString()];
}

console.log(prix(0, R));