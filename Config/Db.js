const mongoose = require('mongoose')

require('dotenv').config();

const connectDb = async function(){
    const result = await mongoose.connect(process.env.mongoUrl)
    return result;
}

module.exports = connectDb


