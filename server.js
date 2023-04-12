const express = require("express");

const app = express();

app.use(express.json());

app.use(MyMiddleWare);

function MyMiddleWare(req, res, next) {
    console.log("Inside the middle ware I created");
    next();
}
// stich the routes to server
require("./routes/idea.routes")(app);
// starting server

app.listen(5050, ()=>{
    console.log('Server Started');
});