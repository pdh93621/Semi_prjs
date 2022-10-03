const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require("fs")

// const {exec} = require('node:child_process')
// const a = 'my'
// const b = 'prj'

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(bodyParser.urlencoded({extended: true}))

var router = require('./router/main')(app);

// app.get('/', (req, res) => {
//     let py_path = __dirname + "/public/prac_py.py"
//     exec(`python ${py_path} ${a} ${b}`, (error, stdout, stderr) => {
//         res.render('index', {
//             title: stdout
//         })
//     })
//     res.sendFile(__dirname + "/views/index.ejs")
// })

// app.get('about', (req, res) => {
//     res.render('about.html')
// })

app.listen((port), () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`)
})