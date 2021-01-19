/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// const R: number = parseInt(readline());
// const L: number = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
// 1
// 1 1
// 2 1
// 1 2 1 1
// 1 1 1 2 2 1
// 3 1 2 2 1 1
// 1 3 1 1 2 2 2 1
// 1 1 1 3 2 1 3 2 1 1

const R = 1;
const L = 6;

const interprete = (suite: string): string => {

  let tableau: string[];

  if (suite.length === 1) {
    tableau = [suite];
  } else {
    tableau = suite.split(' ');
  }

  let compteur: number = 1;
  let solution: string = '';

  if (tableau.length === 1) return '1 ' + suite;

  for (let i = 1; i < tableau.length; i++) {
    if (i === tableau.length - 1) {
      if (parseInt(tableau[i]) === parseInt(tableau[i - 1])) {
        compteur++;
        solution = solution + compteur + ' ' + tableau[i - 1];
      } else {
        solution = solution + compteur + ' ' + tableau[i - 1] + ' ' + '1' + ' ' + tableau[i];
      }
    } else if (parseInt(tableau[i]) === parseInt(tableau[i - 1]) && i < tableau.length - 1) {
      compteur++;
    } else {
      solution = solution + compteur + ' ' + tableau[i - 1] + ' ';
      compteur = 1;
    }
  }

  return solution;
};

const conway = (
  start: number,
  rang: number
) => {
  let memoire: string = start.toString();
  for (let i = 2; i <= rang; i++) {
    memoire = interprete(memoire);
  }

  return memoire;
}

console.log(conway(R, L));
