// const {execSync} = require('node:child_process')
// const { stderr } = require('node:process')

// let py_path = __dirname + "\\prac_pyup.py"
// let values = JSON.parse(execSync(`python ${py_path}`))

values = {
    labels: [10, 20, 30, 40],
    open: [1, 2, 3, 4]
}

new Chart("myChart", {
    type: "line",
    data: {
      labels: values.labels,
      datasets: [{ 
          lineTension: 0,
        data: values.open,
        borderColor: "yellow",
        fill: false
      }]
    },
    options: {
      legend: {display: false}
    }
  });