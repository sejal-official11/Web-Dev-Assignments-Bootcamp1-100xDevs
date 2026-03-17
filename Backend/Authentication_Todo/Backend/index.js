const express = require("express");
const jwt = require("jsonwebtoken");
const {authMiddleware} = require("../middleware")
const app = express();
app.use(express.json());



const notes = [];
const user = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userExists = user.find((user) => user.username === username);
  if (userExists) {
    return res.status(403).json({
      message: "User exists already",
    });
  }

  user.push({
    username: username,
    password: password,
  });
  res.json({
    message: "You have signed up",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userExists = user.find(
    (user) => user.username === username && user.password === password,
  );
  if (!userExists) {
    res.status(403).json({
      message: "Incorrect credentials",
    });
    return;
  }

  const token = jwt.sign(
    {
      username: username,
    },
    "sejal123",
  );

  res.json({
    token: token,
  });
});

// authenticated endpoint
app.post("/notes", authMiddleware, (req, res) => {
  // check if they have sent the right header

  const username = req.username;
  const note = req.body.note;
  notes.push({ note, username });
  res.json({
    message: "Done!",
  });
});

// authenticated endpoint
app.get("/notes", authMiddleware, (req, res) => {

  const userNotes = notes.filter((note) => notes.username === username);
  res.json({
    notes : userNotes,
  });
});

app.get("/", (req, res) => {
  res.sendFile(
    "E:/The-new-old-tech-skills-by-Sejal-2026/Web-Dev-Assignments-Bootcamp1-100xDevs/Backend/Authentication_Todo/Frontend/index.html",
  );
});


app.get("/signup", (req, res) => {
  res.sendFile(
    "E:/The-new-old-tech-skills-by-Sejal-2026/Web-Dev-Assignments-Bootcamp1-100xDevs/Backend/Authentication_Todo/Frontend/signup.html",
  );
});


app.get("/signin", (req, res) => {
  res.sendFile(
    "E:/The-new-old-tech-skills-by-Sejal-2026/Web-Dev-Assignments-Bootcamp1-100xDevs/Backend/Authentication_Todo/Frontend/signin.html",
  );
});

app.listen(3000);