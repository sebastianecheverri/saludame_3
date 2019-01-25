
const express = require('express')
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/hello', (req, res) => {
  console.log(req)
  res.render('saludo', { message: "Hola " + req.body.name + "!" });
});

app.listen(3000, () => console.log('listening 3000'));