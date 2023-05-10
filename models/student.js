const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    branch: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    passingYear: {
        type: Number,
        required: true
    },
});

const Students = mongoose.model("students", studentSchema);

module.exports = {
    Students
}