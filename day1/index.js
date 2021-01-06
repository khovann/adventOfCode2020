const utils = require('../utils');

var cleanList = utils.readInput(__dirname + '/input.txt').split('\n').filter(item => item).map(Number);

function star1(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if ((list[i] + list[j]) == 2020) {
                return list[i] * list[j];
            }
        }
    }
}

function star2(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            for (let k = 0; k < list.length; k++) {
                if ((list[i] + list[j] + list[k]) == 2020) {
                    return list[i] * list[j] * list[k];
                }
            }
        }
    }
}
exports.s1 = star1(cleanList)
exports.s2 = star2(cleanList)