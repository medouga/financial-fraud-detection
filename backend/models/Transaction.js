const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    transactionId: String,
    sender: String,
    receiver: String,
    amount: Number,
    timestamp: Date,
});

module.exports = mongoose.model('Transaction', TransactionSchema);
