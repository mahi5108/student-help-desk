const { default: mongoose } = require("mongoose");

const transcriptSchema = new mongoose.Schema({
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

const Transcript = mongoose.model("transcripts", transcriptSchema);

module.exports = {
    Transcript}