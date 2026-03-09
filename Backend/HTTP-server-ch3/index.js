const express = require('express');
const app = express();

//route handlers

app.get('/', function(req, res) {
    res.send('Hello World');
})


app.listen(3000);

app.listen(3001);
app.listen(3002);