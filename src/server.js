const express = require('express');
const { studentRoute } = require('./routes/student/studentRoute');
const app = express();
require("dotenv").config();

app.use(express.json())
app.use("/api",studentRoute);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("port is running on "+port);

})