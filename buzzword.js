'use strict';

const express = require('express');
const router = express.Router();
const buzzArr = require('./buzzArr');

router.route('/')
.post((req, res) => {
  console.log(req.body.buzzWord + " " + req.body.score);
  let buzzWord = {'buzzWord' : req.body.buzzWord, 'score' : Number(req.body.score)};
  console.log("buzzArr: " + buzzArr);
  buzzArr.push(buzzWord);
  console.log(buzzWord);
  res.send('Fudge'); 
})
.put((req, res) => {
  res.send('pie');
})
.delete((req, res) => {
    res.send('cool');
});


module.exports =router;