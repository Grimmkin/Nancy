const { default: mongoose } = require("mongoose");

const transactionSchema = mongoose.Schema({
    item: {
        type: String, 
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    //timestamps: true,
    category: {
        type: String,
        required: true
    },
    group:{
        type: String,
        enum:["Income", "Expense", "Transfer"],
        required: true
    }

})

const transactionsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    children: [transactionSchema],
  });

const Transactions = mongoose.model("Transaction", transactionsSchema);

module.exports = { Transactions };