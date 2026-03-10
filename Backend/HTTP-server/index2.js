const express = require("express");
const app = express();

let requestCount = 0;



function middleware(req, res, next) {
    next();
}


app.use(middleware);
app.use(express.json());


app.use((req, res, next) => {
  console.log("Hi there");
  next();
});

app.get("/", middleware, function (req, res) {
    requestCount++;
  res.sendFile(
    "E:/The-new-old-tech-skills-by-Sejal-2026/Web-Dev-Assignments-Bootcamp1-100xDevs/Backend/HTTP-server/index.html",
  );
});

app.post("/sum", middleware, function (req, res) {
    requestCount++;
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b,
  });
});

app.post("/mul", middleware, function (req, res) {
    requestCount++;
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a * b,
  });
});

app.get("/status", middleware, (req, res) => {
    requestCount++;
  res.send("HI");
});


app.get("/requestCount", (req, res) => {
  res.send({
    requestCount,
  });
});



app.listen(3002);
