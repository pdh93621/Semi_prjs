const {exec} = require('node:child_process')
const { stderr } = require('node:process')

let coin = "KRW-XRP"
let op = 1
let hp = 1
let lp = 1
let cp = 1

let values

let py_path = __dirname + "/pyup.py"
exec(`python ${py_path} ${coin} ${op} ${hp} ${lp} ${cp}`, (error, stdout, stderr) => {
    values = stdout.split()
})

var xValues = values[0];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
            lineTension: 0,
            data: values[1].split(),
            borderColor: "red",
            fill: true
        }, { 
            lineTension: 0,
            data: values[2].split(),
            borderColor: "green",
            fill: false
        }, { 
            lineTension: 0,
            data: values[3].split(),
            borderColor: "blue",
            fill: false
        }, {
            lineTension: 0,
            data: value[4].split(),
            borderColor: "yellow",
            fill: false
        }]
    },
    options: {
    legend: {display: false}
    }
});