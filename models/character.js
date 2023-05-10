const { default: mongoose } = require("mongoose");

const characterSchema = new mongoose.Schema({
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
    },
    
});

const Character = mongoose.model("characters", characterSchema);

module.exports = {
    Character
}