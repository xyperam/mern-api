const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./src/routes/products');
const authRoutes =require('./src/routes/auth')
const blogRoutes=require('./src/routes/blog')
app.use(bodyParser.json());

app.use('/',productRoutes);
app.use('/auth',authRoutes)
app.use('/blog',blogRoutes)
//GET '/users' ====> [{name: ilham}]
app.listen(4000);