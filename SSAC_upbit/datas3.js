const {execSync} = require('node:child_process')

let py_path = __dirname + "\\pyup.py"

let coin = "KRW-XRP"
let values = JSON.parse(execSync(`python ${py_path} ${coin} 1 1 1 1`)) 

// console.log(values)

new Chart("myChart", {
    type: "line",
    data: {
        labels: values.labels,
        datasets: [{ 
            lineTension: 0,
            data: values.open,
            borderColor: "red",
            fill: false
        }, { 
            lineTension: 0,
            data: values.high,
            borderColor: "green",
            fill: false
        }, { 
            lineTension: 0,
            data: values.low,
            borderColor: "blue",
            fill: false
        }, {
            lineTension: 0,
            data: values.close,
            borderColor: "yellow",
            fill: false
        }]
    },
    options: {
    legend: {display: false}
    }
});