const express = require('express');
const bodyparser=require('body-parser');
const path=require("path");
const dotenv=require('dotenv');
const morgan=require('morgan');
// const axios=require('axios')
const connectDB = require('./connection/mongo/mongo')
const data = require('./connection/db/db')



const app = express()


app.use(bodyparser.urlencoded({extended:true}))

app.set('views engine',"html");

dotenv.config({path:'config.env'})
const PORT=process.env.PORT || 8080

app.use(morgan('tiny'))
connectDB();


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/users.html'));
})

app.get('/NewUser',(req,res)=>{
  res.sendFile(path.join(__dirname+'/NewUser.html'))
})

app.get('/update_user',(req,res)=>{
    res.sendFile(path.join(__dirname+'/update_user.html'))
  })

 




// API ROUTING
app.post('/save',data.create);
app.get('/save',data.find);
app.put('/update_user/:id',data.update);
app.delete('/save/:id',data.delete);





app.listen(8000,()=>{console.log('Server is running on https://localhost:8000')})