const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./src/routes/products');
const authRoutes =require('./src/routes/auth')
const blogRoutes=require('./src/routes/blog')
const mongoose = require('mongoose');
app.use(bodyParser.json());

app.use('/',productRoutes);
app.use('/auth',authRoutes)
app.use('/blog',blogRoutes)

app.use((error,req,res,next)=>{
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message,data:data});
})
mongoose.connect('mongodb+srv://ilhamimaninuralam:123@cluster0.7o4pfh8.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4000,()=> console.log('Connection Success'));
})
.catch(err => console.log(err));