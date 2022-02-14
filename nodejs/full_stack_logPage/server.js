const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/new_todo', (req, res) => {
  const todo = req.body.todo;
  console.log(todo);
  res.render('index');
});

app.put('/todo', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/todo', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow);
});
