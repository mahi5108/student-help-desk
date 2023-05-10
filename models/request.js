const { default: mongoose } = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    requestType: {
      type: String,
      required: true,
    },
    requestId: {
      type: mongoose.Types.ObjectId,
      unique: true,
      required: true,
    },
    studentId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      enum: ['Open','Pending','Closed'],
      default: 'Open',
    },
  },
  {
    timestamps: true,
  }
);

const Request =
  mongoose.models.requests || mongoose.model("requests", requestSchema);

module.exports = {
  Request,
};
