const { default: mongoose } = require("mongoose");

const migrationSchema = new mongoose.Schema({
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
    issue: {
        type: String,
        required: true
    },
    
});

const Migration = mongoose.model("migrations", migrationSchema);

module.exports = {
    Migration}