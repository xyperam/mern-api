exports.createProduct=(req,res,next)=>{
    res.json(
        {
            message: 'Create Product Succes',
            data:{
                id:1,
                name:'Sari gandum',
                price: 8000
            }
            }
            );
    next();
}

exports.getAllProducts = (req,res,next)=>{
    res.json(
        {
            message: 'Get All Product Succes',
            data:{
                id:1,
                name:'Sari gandum',
                price: 8000
            }
            }
            );
    next();
}