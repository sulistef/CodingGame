/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// WORK IN PROGRESS
// WORK IN PROGRESS
// WORK IN PROGRESS
// WORK IN PROGRESS

const N: number = parseInt(readline()); //nombres de tournois
const R: number = parseInt(readline()); //nombres de jours consécutifs

const createPrize = () => {
  let prize: number[] = [];

  for (let i = 0; i < N; i++) {
    prize.push(parseInt(readline()));
  }

  console.error('prize: ', prize);
  return prize;
};

const compteTableau = (tableau: number[], rang: number, R: number) => {
  if (R === tableau.length) return tableau.reduce((somme, val) => somme + val)

  const loop = Math.trunc(tableau.length / R);

  let i: number;
  for (i = loop - 1; i >= 0; i--) {
    const position = (i * R) + rang + (i - 1)
    console.error("calcul: ", position);

    if (position < tableau.length && position >= 0) tableau.splice(position, 1, 0);
  };

  return tableau.reduce((memo, val) => {
    return memo + val;
  }, 0);

};

console.error("N: ", N);
console.error("R: ", R);
const prize: number[] = createPrize();

const bestSum = (
  prize: number[],
  R: number,
  J: number = 0,
  somme: number = 0
) => {
  if (J + 1 === R) return somme;

  const nouvelleSomme = compteTableau(prize, J, R);

  return nouvelleSomme > somme ? bestSum(prize, R, J + 1, nouvelleSomme) : bestSum(prize, R, J + 1, somme)
};
