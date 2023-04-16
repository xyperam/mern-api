const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./src/routes/products');
const authRoutes =require('./src/routes/auth')

app.use(bodyParser.json());

app.use('/',productRoutes);
app.use('/auth',authRoutes)
//GET '/users' ====> [{name: ilham}]
app.listen(4000);