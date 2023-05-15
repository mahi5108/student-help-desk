const { default: mongoose } = require("mongoose");

const fee_related_issueSchema = new mongoose.Schema({
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
    
    
});

const Fee_Related_Issue = mongoose.model("fee_related_issues", fee_related_issueSchema);

module.exports = {
    Fee_Related_Issue
}