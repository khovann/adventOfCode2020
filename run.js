var hrMeasureAll = process.hrtime()
const utils = require('./utils')

let myArgs = process.argv.slice(2);
console.log('Running days ', myArgs);

let results = [];

function runAll() {
    utils.range(25, 1).forEach(runSelected)
}

function runSelected(dayNumber) {
    try {
        var hrMeasureDay = process.hrtime()
        let result = require('./day' + dayNumber);
        var hrMeasureDayEnd = process.hrtime(hrMeasureDay)
        results.push({
            "day": dayNumber,
            "Star1":result['s1'],
            "Star2":result['s2'],
            'Execution time': '%ss %msms'.split('%s').join(hrMeasureDayEnd[0]).split('%ms').join(hrMeasureDayEnd[1] / 1000000)
        })
    } catch (error) {
        console.log("Day " + dayNumber + " not done yet, what are you waiting for?")
    }
}

if(myArgs.length > 0) {
    myArgs.forEach(runSelected);
} else {
    runAll();
}
console.table(results);
var hrMeasureAllEnd = process.hrtime(hrMeasureAll)
console.info('Whole execution time (hr): %ds %dms', hrMeasureAllEnd[0], hrMeasureAllEnd[1] / 1000000)