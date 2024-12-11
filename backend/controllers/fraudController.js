const Transaction = require('../models/Transaction');
const dbscanClustering = require('../utils/dbscan');

exports.detectFraud = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        const data = transactions.map(t => [t.amount, new Date(t.timestamp).getTime()]);
        
        const { clusters, noise } = dbscanClustering(data, 50, 3); // Adjust `eps` and `minPoints` as needed
        
        res.json({ clusters, noise });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
