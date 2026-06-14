const Product = require('../models/Product');


class ProductController {
    
    // post api 

    async createProduct (req,res) {
       try{
        const product = await Product.create(req.body)
        res.status(201).json({
            message:"Product Created Sucessfully",
            sucess:true,
            data:product
        })
       }
       catch(err){
        console.log(err)
       }
    }

}

module.exports = new ProductController()