const Mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://nancy:finance101@cluster0.sld0w8f.mongodb.net/?retryWrites=true&w=majority";

Mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.error(err);
})