const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routes
const studentRoute = require('./routes/studentRoute.js');
app.use('/student', studentRoute);
const gradeRoute = require('./routes/gradeRoute.js');
app.use('/grade', gradeRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}`));


// conncecting to the database
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ezmerelda:ezmerelda@project-cluster.eolvhqo.mongodb.net/demodb', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connection succesful'))
    .catch((err) => console.error(err));