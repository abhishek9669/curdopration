const { mongoose } = require("../config/db");

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
},{
    timestamps:true
})


const Student = mongoose.model('Student', studentSchema);

exports.Student=Student;