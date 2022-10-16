const {exec} = require('node:child_process')
const a = 'star'
const b = '25'

module.exports = function(app, fs)
{     
   app.get('/',function(req,res){
      let py_path = __dirname + "\\prac_py.py"
      exec(`python ${py_path} ${a} ${b}`, (error, stdout, stderr) => {
         res.render('index', {
            title: stdout
         })
      })
   });

   app.get('/about', function(req,res){
      // console.log(req)
      res.render('about.html');
   });

   app.post('/about', (req, res) => {
      // console.log(req)
      res.send(req.body)
   })

   app.get('/graph', (req, res) => {
      let py_path = __dirname + "\\pyup.py"
      let coin = "KRW-BTC"
      exec(`python ${py_path} ${coin} 1 1 1 1`, (error, stdout, stderr) => {
         // console.log(stdout)
         res.render('graph', JSON.parse(stdout))
      })
   })

   app.get('/choice', (req, res) => {
      choices = JSON.parse(fs.readFileSync("sources/coins.json"))
      console.log(choices)
      res.render('select_coin', choices)
   })
}