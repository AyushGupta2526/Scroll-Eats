const moongoose = require('mongoose');

function connectDB() {
    moongoose.connect(process.env.MONGODB_URI)
    .then ( () => {
        console.log("MongoDB connected");
    })
    .catch( (err) => {
        console.log("MongoDB connection error:", err);
    })
}

module.exports = connectDB;