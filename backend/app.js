import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json())


const PORT = process.env.PORT ||5000
app.get((req,res)=>{
    res.json({message:"done"})
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("database ban gaya reeee")
})
.catch((err)=>{
    console.log("err aaya re baba",err)
})




app.listen(PORT ,()=>{
    console.log("POrt")
})

// PORT = 5000

// MONGO_URL = mongodb+srv://aayushisharma1:Navgurukul123@cluster0.jfztl.mongodb.net/movieData
