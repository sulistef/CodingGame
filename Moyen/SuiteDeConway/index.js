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
var interprete = function (suite) {
    var tableau = suite.split(' ');
    var compteur = 1;
    var memo = parseInt(tableau[0]);
    var solution = '';
    for (var i = 1; i <= tableau.length; i++) {
        //console.error('i: ', i);
        //console.error('memo: ', memo);
        //console.error('tableau: ', tableau[i]);
        //console.error('compteur: ', compteur);
        //console.error('solution: ', solution);
        //console.error('-------------------')
        if (parseInt(tableau[i]) === parseInt(tableau[i - 1])) {
            compteur++;
        }
        else if (i < tableau.length - 1) {
            solution = solution + compteur + ' ' + tableau[i - 1] + ' ';
            // memo = parseInt(tableau[i]);
            compteur = 1;
        }
        else if (i === tableau.length - 1) {
            if (parseInt(tableau[i]) === parseInt(tableau[i - 1])) {
                compteur++;
                solution = solution + compteur + ' ' + tableau[i - 1];
            }
            else {
                solution = solution + compteur + ' ' + tableau[i - 1] + ' ' + '1' + ' ' + tableau[i];
            }
        }
    }
    return solution;
};
console.error("test", interprete('1 2 1 1'));
console.error("test", interprete('1 1 1 2 2 1'));
console.log('answer');
