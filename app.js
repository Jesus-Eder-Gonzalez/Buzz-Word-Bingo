'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const buzzword = require('./buzzword');

const PORT = process.env.PORT || 8080;

const buzzArr = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/buzzword', buzzword);

app.get('/buzzwords',(req, res) => {
  let buzzObj = {};
  buzzArr.forEach(buzzWord => {
    buzzObj['buzzword'] = buzzWord;
  });
  res.send(buzzObj);
});

// router.route('/buzzwords')
//   .get((req, res) => {
//     let buzzObj = {};
//     buzzArr.forEach(buzzWord => {
//       buzzObj['buzzword'] = buzzWord;
//     });
//     console.log('what');
//     res.send(buzzObj);
//   });

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
