/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var widthAndHeight = readline().split(' ');
const w = parseInt(widthAndHeight[0]);
const h = parseInt(widthAndHeight[1]);
var start = readline().split(' ');
const startRow = parseInt(start[0]);
const startCol = parseInt(start[1]);
const n = parseInt(readline());

const checkPath = (arr, x, y, w, h, n) => {
    const ways = arr.map(tab => checkCell(tab, x, y, w, h, 1));
    return resolve(ways);
};

const checkCell = (arr, x, y, w, h, count) => {
    if (count > 1 && x === startCol && y === startRow) return -1;
    if (x >= w || y >= h ) return -1;
    else if (arr[y][x] === '.') return -1;
    else if (arr[y][x] === '.') return -1;
    else if (arr[y][x] === 'T') return count;
    else if (arr[y][x] === '>') return checkCell(arr, x + 1, y, w, h, count+1);
    else if (arr[y][x] === '<') return checkCell(arr, x - 1, y, w, h, count+1);
    else if (arr[y][x] === 'v') return checkCell(arr, x, y + 1, w, h, count+1);
    else if (arr[y][x] === '^') return checkCell(arr, x, y -1, w, h, count+1);
};

const resolve = (arr) => {
    if (arr.length < 1) return 'TRAP';
    if (Math.max(...arr) === -1) return 'TRAP'
    
    let solution;
    let solutionValue = null;

    arr.map((way, i) => {
        if (arr[i] >= 0 && solutionValue === null) {
            solution = i;
            solutionValue = arr[i]
        } else if(arr[i] < solutionValue && arr[i] >= 0) {
            solution = i;
            solutionValue = arr[i];
        }
    });

    return solution;    
};






let mapArray = [];

for (let i = 0; i < n; i++) {
    let carte = [];

    for (let j = 0; j < h; j++) {
        const ligne = readline();
        carte[j] = ligne.split('');
    }

    mapArray[i] = carte;
};


console.log(checkPath(mapArray, startCol, startRow, w, h, n));

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

