const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const signUp = require('./src/routes/signUp');
// const fileupload = require("express-fileupload");

app.use(cors());
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true, 
  })
);


app.use('/signup', signUp);

/* Error handler middleware */


app.listen(3030);
