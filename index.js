import {markdown} from 'markdown';
var express = require('express');

console.log(markdown.toHTML('Hello *World*!'));

let app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(5000, ()=>{console.log(`app listening on port ${5000}`);});
