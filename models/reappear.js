const { default: mongoose } = require("mongoose");

const reappearSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rs: {
        type: String,
        required: true
    },
    refno: {
        unique: true,
        type: String,
        required: true
    },
    date: {
        type: String,
        default: new Date()
    },

    course: [{
        name: String,
        code: String,
        semester:Number
    }]
    
});

const Reappear = mongoose.model("reappears", reappearSchema);

module.exports = {
    Reappear
}