const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const UserRouter = require('./routes/user')
const ProductsRouter = require('./routes/productRouter')

const app= express();

dotenv.config()
app.use(cors())
app.use(morgan("dev"))

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));

app.use("/users",UserRouter)
app.use('/api/products',ProductsRouter)


const PORT= process.env.PORT 

mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(`${error} cant connect `)
})