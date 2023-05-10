const { default: mongoose } = require("mongoose");

const dmcSchema = new mongoose.Schema({
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

const Dmc = mongoose.model("dmc", dmcSchema);

module.exports = {
    Dmc}