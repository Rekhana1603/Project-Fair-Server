const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("MongoDB Atlas connected successfully with pfServer");
}).catch(err=>{
    console.log("MongoDB Atlas connection failed");
    console.log(err);  
})