const express = require('express');
const connectDb = require('./Config/Db');
const router = require('./Router/Router');
const app = express();

app.use(express.json());
app.use('/',router);
require('dotenv').config();

const port = process.env.port;

connectDb().then(()=>{
    app.listen(port,()=>{
          console.log('Running');
    })
})