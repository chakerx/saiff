const mongoose=require('mongoose')

const productSchema= mongoose.Schema({
    title:String,
    description:String,
    imgSrc:String
,
    }
)

export default mongoose.model("Product",productSchema)