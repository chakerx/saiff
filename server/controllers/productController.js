const Product = require ('../models/product')

//CRUD 
//Add New PRODUCT

const AddProducts = async(req,res)=>{
    try {
    const NEwpROD = new Product(req.body)
    const addedProd = await NEwpROD.save()
    res.json(addedProd)
    } catch (error) {
        console.log(error);
    }
}

//Get Products 

const GetProducts = async(req,res)=>{
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.log(error)
    }
}

//update products

const UpdatedProducts= async(req,res)=>{
    try {
        const UpdatProducts = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(UpdatProducts)
    } catch (error) {
        console.log(error)
    }
}

//Delete Product

const DeleteProducts = async(req,res)=>{
    try {
        const DeletProd = await Product.findByIdAndDelete(req.params.id)
        res.json({msg:'The product is deleted',DeletProd})
    } catch (error) {
        console.log(error)
    }
}







module.exports={AddProducts,GetProducts,UpdatedProducts,DeleteProducts}