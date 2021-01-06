const {
    count
} = require('console');
const utils = require('../utils');

const testData = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc'
]

function isLineValid(line) {
    let splitLine = line.split(':'),
        password = splitLine[1].trim(),
        char = splitLine[0].split(' ')[1],
        min = splitLine[0].split(' ')[0].split('-').map(Number)[0],
        max = splitLine[0].split(' ')[0].split('-').map(Number)[1],
        charCount = 0;
    for (let index = 0; index < password.length; index++) {
        if (password.charAt(index) == char) {
            charCount++;
            if (charCount > max) {
                return false;
            };
        }
    }
    if (charCount < min) {
        return false;
    }
    return true;
}

function isLetterPositionValid(line) {
    let splitLine = line.split(':'),
        password = splitLine[1].trim(),
        char = splitLine[0].split(' ')[1],
        pos1 = splitLine[0].split(' ')[0].split('-').map(Number)[0] - 1,
        pos2 = splitLine[0].split(' ')[0].split('-').map(Number)[1] - 1;

    if(pos1 < 0 || pos2 < 0) {
        return false;
    }
    if(password.charAt(pos1) == password.charAt(pos2)) {
        return false;
    }
    if (password.charAt(pos1) == char || password.charAt(pos2) == char) {
        return true;
    }
}


var cleanList = utils.readInput(__dirname + '/input.txt').split('\n');

exports.s1 = cleanList.filter(isLineValid).length
exports.s2 = cleanList.filter(isLetterPositionValid).length

console.log(exports);