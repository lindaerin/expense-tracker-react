const express =  require('express');
const router = express.Router();

const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/controller');

// connect to controller file for get and post
router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

// delete needs and id to know which item to remove

router
    .route('/:id')
    .delete(deleteTransaction);

// export router
module.exports = router;