


const express = require("express");

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile("E:/The-new-old-tech-skills-by-Sejal-2026/Web-Dev-Assignments-Bootcamp1-100xDevs/Backend/HTTP-server/index.html")
})


app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a+b
    })
})


app.post("/mul", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a*b
    })
})



app.listen(3002);