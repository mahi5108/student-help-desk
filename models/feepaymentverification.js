const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/fee-payment-verification', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Define the data model
const paymentSchema = new mongoose.Schema({
  name: String,
  email: String,
  transactionId: String,
  verified: { type: Boolean, default: false },
});

const Payment = mongoose.model('Payment', paymentSchema);

// Handle form submission
app.post('/verify-payment', (req, res) => {
  const { name, email, transactionId } = req.body;

  // Save the payment to the database
  const payment = new Payment({ name, email, transactionId });
  payment.save(err => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.send('Payment saved');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
