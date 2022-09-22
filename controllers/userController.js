const express = require("express");
const { Accounts } = require("../model/account.model.js");
const { Transactions } = require("../model/transactions.model.js");
const { User }= require("../model/user.model.js")

const registerNewUser = async (req, res) => {
    const { first_name, last_name, password_hash, email, date_of_birth, gender } = req.params;

    // validate credentials
    if (!(first_name && last_name && password_hash && email && DOB && gender)) {
        return res.status(404).send("User already exists");
    }

    // check if user exists
    const user = User.findOne({ email });
    if (user){
        return res.status(409).send("User already exists");
    }

    // create user
    const newUser = new User(
        {
            _id: new mongoose.Types.ObjectId(),
            first_name: first_name,
            last_name: last_name,
            password_hash: password_hash,
            email: email.toLowerCase(),
            date_of_birth: date_of_birth,
            gender: gender,
        }
    )
    
    newUser.save(err => {
        if (err){
            console.error(err);
            return;
        }

        // create accounts object for user
        const newAccounts = new Accounts({
            user: newUser._id,
            children: [],
            categories: [],
        })

        newAccounts.save(err => {
            if (err){
                console.error(err);
                return;
            }
        })

        // create a new transactions object for user
        const newTransactions = new Transactions({
            user: newUser._id,
            children: [],
        })

        newTransactions.save(err => {
            if (err){
                console.error(err);
                return;
            }
        })
    })
}

module.exports = {
    registerNewUser,
}