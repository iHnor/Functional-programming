let shapes = [
    { color: 'black', width: 20, height: 20 },
    { color: 'red', width: 12, height: 15 },
    { color: 'red', width: 4, height: 13 },
    { color: 'white', width: 23, height: 34 },
    { color: 'green', width: 11, height: 11 },
    { color: 'white', width: 21, height: 9 },
    { color: 'black', width: 19, height: 19 },
];
const flow      = (...functs) => shapes => functs.reduce((accum, func) => func(accum), shapes); 
const map       = func => squares => squares.map(func);
const reduce    = (func, value) => squares => squares.reduce(func, value);

const isBlack   = shapes => shapes.color  === 'black';
const isRed     = shapes => shapes.color === 'red';

const isSquare  = shapes => shapes.height === shapes.width;
const isRectangle = shapes => shapes.height !== shapes.width;

const and       = (func_1, func_2) => shapes => func_1(shapes) && func_2(shapes);
const filter    = func => shapes  => shapes.filter(func);

const squareOfFigures = func => func.width * func.height;
const perimeterOfFigures = func => (func.width + func.height) * 2;

const compSquare = (max, curr) => max > curr ? max : curr;
const sumOfPerimeter = (firstPr, secondPr) => firstPr + secondPr;

const maxSquareBlackSquares = flow(
    filter(and(isBlack, isSquare)),
    map(squareOfFigures),
    reduce(compSquare, -1)
)
console.log(maxSquareBlackSquares(shapes))

const sumOfPerimetersRedRectangles = flow (
    filter(and(isRed, isRectangle)),
    map(perimeterOfFigures), 
    reduce(sumOfPerimeter, 0)
)
console.log(sumOfPerimetersRedRectangles(shapes));