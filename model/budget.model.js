const { default: mongoose } = require("mongoose");

const budgetSchema = mongoose.Schema({
    categories: {
        type: mongoose.Schema.Types.ObjectId,
    },
    category: {
        children: []
    }
})

const budgetsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    budgets: [budgetSchema]
})

Budgets = mongoose.model("Budget", budgetsSchema);

module.exports = { Budgets };