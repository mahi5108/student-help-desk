const { default: mongoose } = require("mongoose");

const degreeSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
       
    },
    date: {
        type: String,
        default: new Date()
    },
    
});

const Degree = mongoose.model("degrees", degreeSchema);

module.exports = {
    Degree}