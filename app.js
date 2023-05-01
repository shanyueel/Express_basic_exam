const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/',(req, res)=>{
  res.render('index',{ title : '首頁' })
})

app.get('/about',(req, res)=>{
  res.render('index',{ title : 'About' })
})

app.get('/portfolio',(req, res)=>{
  res.render('index',{ title : 'Portfolio' })
})

app.get('/contact',(req, res)=>{
  res.render('index',{ title : 'Contact' })
})

app.listen(port,()=>{
  console.log(`Express Server running at http://localhost:${port}`)
})