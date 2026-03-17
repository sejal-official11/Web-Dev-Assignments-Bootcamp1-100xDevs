const express = require('express');

const app = express();


app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
     const note = req.body.note;
     notes.push(note);
     res.json({

     })
});


app.get("/notes", (req, res) => {
     res.json({
          notes
     })
})


app.get('/', (req, res) => {
    res.sendFile("E:/The-new-old-tech-skills-by-Sejal-2026/Web-Dev-Assignments-Bootcamp1-100xDevs/Backend/Authentication_Todo/Frontend/index.html")
})


app.listen(3000);