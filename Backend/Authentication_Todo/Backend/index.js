const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const notes = [];
const user = [
  {
    username: "sejal123",
    password: "123123",
  },
  {
    username: "selin321",
    password: "123321",
  },
];

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
app.post("/notes", (req, res) => {
  // check if they have sent the right header
  const token = req.headers.token;
  if (!token) {
    res.status(403).send({
      message: "You are not logged in",
    });
    return;
  }

  const decoded = jwt.verify(token, "sejal123");
  const username = decoded.username;

  if (!username) {
    res.status(403).json({
      message: "malformed token",
    });
    return;
  }

  const note = req.body.note;
  notes.push({ note, username });
  res.json({
    message: "Done!",
  });
});

// authenticated endpoint
app.get("/notes", (req, res) => {
  const token = req.headers.token;

  if (!token) {
    res.status(403).send({
      message: "You are not logged in",
    }); 
    window.location.href = "/login";
  }

  const decoded = jwt.verify(token, "sejal123");
  const username = decoded.username;

  if (!username) {
    res.status(403).json({
      message: "malformed token",
    });
    return;
  }

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