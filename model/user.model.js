const mongoose = require("mongoose");

var userSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        first_name:{
            type: String,
            required: true,
            default: false,
        },
        last_name:{
            type: String,
            required: true,
            default: false,
        },
        password_hash:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        date_of_birth:{
            type: String,
            required: true,
        },
        gender:{
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true,
        },
    }
);

module.exports = mongoose.model("User", userSchema);