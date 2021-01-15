// @desc    get all transactions
// @route   GET /api/routes/transactions 
exports.getTransactions = (req, res, next) => {
    res.send('GET Transactions');
}

// @desc    add transaction
// @route   POST /api/routes/transactions 
exports.addTransaction = (req, res, next) => {
    res.send('POST Transaction');
}

// @desc    delete transaction
// @route   DELETE /api/routes/transactions 
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE Transaction');
}

