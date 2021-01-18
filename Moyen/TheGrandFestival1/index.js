/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
// WORK IN PROGRESS
// WORK IN PROGRESS
// WORK IN PROGRESS
// WORK IN PROGRESS
var N = 14;
var R = 6;
// const prize = [13, 12, 11, 9, 16, 17, 100];
// const prize = [12, 14, 52, 7, 3, 1, 1, 89, 98, 100, 12, 5, 6, 8];
// const prize = [12, 14, 52, 7, 3, 1];
// const prize = [12, 13, 11, 14, 16, 12, 15, 9, 7, 18, 8, 20, 31, 14, 16, 12, 18, 9, 10, 22];
var prize = [
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
console.error("N: ", N);
console.error("R: ", R);
// const prize: number[] = createPrize();
var sommeTableau = function (tableau) {
    return tableau.reduce(function (mem, valeur) {
        return mem + valeur;
    }, 0);
};
var bestSommeTableau = function (tableau, R) {
    var bestSomme = -1;
    var bestPosition = -1;
    var somme = -1;
    for (var i = 0; i <= tableau.length - R; i++) {
        somme = sommeTableau(tableau.slice(i, i + R));
        if (somme > bestSomme) {
            bestSomme = somme;
            bestPosition = i;
        }
        ;
    }
    ;
    return [bestSomme, bestPosition];
};
var bestPlan = function (tableau, R, S) {
    if (tableau.length === 0)
        return 0;
    if (tableau.length === 1)
        return tableau[0];
    var valeur = bestSommeTableau(tableau, S);
    // console.log("tableau: ", tableau);
    // console.log("valeur", valeur);
    // console.log("tab gauche", tableau.slice(0, valeur[1] - 1));
    // console.log("tab droite", tableau.slice(valeur[1] + R + 1, tableau.length));
    // console.log('-----------------------------------')
    var gauche = valeur[1] - 1 < 0 ? 0 : valeur[1] - 1;
    var droite = valeur[1] + S + 1;
    var sommeG = -1;
    var supersommeG = -1;
    var sommeD = -1;
    var supersommeD = -1;
    for (var i = 1; i <= R; i++) {
        sommeG = bestPlan(tableau.slice(0, gauche), R, i);
        sommeD = bestPlan(tableau.slice(droite, tableau.length), R, i);
        if (sommeG > supersommeG)
            supersommeG = sommeG;
        if (sommeD > supersommeD)
            supersommeD = sommeD;
    }
    ;
    return supersommeG + valeur[0] + supersommeD;
};
var superplan = function (tableau, R) {
    var somme = -1;
    var bestSomme = -1;
    for (var i = 1; i <= R; i++) {
        somme = bestPlan(tableau, R, i);
        if (somme > bestSomme)
            bestSomme = somme;
    }
    ;
    return bestSomme;
};
// console.log(bestSommeTableau(prize, R))
console.log(superplan(prize, R));
