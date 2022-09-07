const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://Abhishek9669:Abhishek9669@cluster0.kmfbfsc.mongodb.net/?retryWrites=true&w=majority`)
.then((s)=>{
    console.log("coonect")
}).catch((err)=>{
    console.log("not coonect",err)
})

exports.mongoose=mongoose;

