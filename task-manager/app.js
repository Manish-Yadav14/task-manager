const express = require('express');
const app = express();
const connectDB =require('./db/connect');
require('dotenv').config()

const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

app.use(express.static('./public'))

app.use('/api/v1/tasks',tasks);


const port = 3000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server is Listening on Port ${port}...`);
        });    
    } catch (error) {
        console.log(error);
        
    }
}

start();

