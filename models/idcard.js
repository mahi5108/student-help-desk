const { default: mongoose } = require("mongoose");

const idcardSchema = new mongoose.Schema({
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

const Idcard = mongoose.model("idcards", idcardSchema);

module.exports = {
    Idcard}