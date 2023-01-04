const mongoose = require('mongoose');

module.exports = async () => {
    try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.URI);
    console.log("connected to DB");
    } catch (error) {
    console.log('error connecting to DB', error.message);
    process.exit(1);
    }};