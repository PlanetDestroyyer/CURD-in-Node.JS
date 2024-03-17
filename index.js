const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./users.js");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/',(req,res)=>{
    console.log(`[GET ROUTE]`);
    res.send("HELLO FROM HOMEPAGE");
});

app.listen(PORT,()=>{
    console.log(`Server Running at Port : ${PORT}`);
});
