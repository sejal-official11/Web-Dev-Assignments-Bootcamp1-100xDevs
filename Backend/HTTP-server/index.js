//http server that supports 4 routes (/sum, /sub, /div, /mul)

// express, hono, elysiajs, trpc



const express = require("express");

const app = express();

app.get("/sum", (req, res) =>{

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;

    res.json({
        ans: sum
    })
    
});



app.get("/sum/:a/:b", (req, res) =>{

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sum = a + b;

    res.json({
        ans: sum
    })
    
});




// app.get("/", (req, res) =>{

//     res.sendFile("E:\The-new-old-tech-skills-by-Sejal-2026\Web-Dev-Assignments-Bootcamp1-100xDevs\Backend\HTTP-server\index.html");
// });


app.get("/sub", (req, res) => {

});
app.get("/mul/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans : a*b
    })


});
app.get("/div", (req, res) => {

});



app.listen(3002);