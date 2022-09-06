var express = require('express');
const { readController, createController, updateController, deleteController } = require('../../controllers/studentController/studentController');
var studentRoute = express.Router();

//CURD OPERATION

studentRoute.get("/student/getAllStudents",readController);
studentRoute.post("/student/create",createController);
studentRoute.put("/student/update/:id",updateController);
studentRoute.delete("/student/delete/:id",deleteController);

module.exports = {studentRoute};