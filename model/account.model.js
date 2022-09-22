const { default: mongoose } = require("mongoose");

const accountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    amount: Number,
})

const accountsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    accounts: [accountSchema],
    categories: [{name: String}],
})

Accounts = mongoose.model("Account", accountsSchema);

module.exports = { Accounts };