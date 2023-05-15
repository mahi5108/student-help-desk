const { default: mongoose } = require("mongoose");

const fee_payment_verificationSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
      
    },
    transactionId: {
        type: String,
        required: true
    },
    
    
});

const Fee_Payment_Verification = mongoose.model("fee_payment_verifications", fee_payment_verificationSchema);

module.exports = {
    Fee_Payment_Verification
}