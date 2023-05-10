const { default: mongoose } = require("mongoose");

const bonafideSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
      
    },
    issue: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: new Date()
    }
    
});

const Bonafide = mongoose.model("bonafides", bonafideSchema);

module.exports = {
    Bonafide
}