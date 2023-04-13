const express = require('express');

const app = express();
const router = express.Router();

router.use('/products',(req,res,next)=>{
    console.log('request:',req);
})

app.use('/',router)

//GET '/users' ====> [{name: ilham}]
app.listen(4000);